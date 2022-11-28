import { HttpErrorResponse } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Center } from 'src/app/Modele';
import { CentreService } from 'src/app/service';
import { centerType } from './centres.types';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html'
})

export class CentresComponent implements OnInit {

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;
  searchText: string = '';
  isAddCenterVisible: boolean = false;

  centerEdit: boolean = false;
  equipEdit: boolean = false;
  chooseAvailable: boolean = true;

  public centers: Center[] = [];

  centerChoosen!: centerType;

  
  constructor(private centerService: CentreService) { }

  ngOnInit(): void {
    this.createForm();
    this.centerEdit = false;
    this.equipEdit = false;
    this.getCenter();
  }

  public getCenter(): void{
    this.centerService.getCenters().subscribe(
      (response: Center[]) => {
        this.centers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onCenterEdit(centre: any){
    this.centerEdit = true;
    this.equipEdit = false;
    this.centerChoosen = centre
    this.form.setValue({
      name: this.centerChoosen.name,
      adress: this.centerChoosen.adress,
      codepostal: this.centerChoosen.codepostal,
      city: this.centerChoosen.city
    })
  }

  onEquipClick(centre?: any){
    if(centre !== undefined) this.centerChoosen = centre; 
    this.centerEdit = false;
    this.equipEdit = true;
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.form = new FormGroup({
      name: new FormControl(''),
      adress: new FormControl(''),
      codepostal: new FormControl(''),
      city: new FormControl('')
    });
  }

  setAddCenterVisible(val: boolean){
    this.isAddCenterVisible = val;
    console.log(this.isAddCenterVisible)
  }

  onUpdate(post: any) {
    this.post = post;
    console.log(JSON.stringify(post.value))
  }
}
