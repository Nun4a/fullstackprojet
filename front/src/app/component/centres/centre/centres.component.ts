import { HttpErrorResponse } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Center } from 'src/app/Modele';
import { CentreService } from 'src/app/service';

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
  isEditCenterVisible: boolean = false;
  isEditEquipeVisible: boolean = false;

  public centers: Center[] = [];

  centerChoosen!: Center;

  
  constructor(private centerService: CentreService) { }

  ngOnInit(): void {
    this.createForm();
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

  onCenterEdit(centre: Center){
    this.isEditCenterVisible = true;
    this.isAddCenterVisible = false;
    this.isEditEquipeVisible = false;

    this.centerChoosen = centre
    console.log(this.centerChoosen)
  }

  onEquipClick(centre?: any){
    if(centre !== undefined) this.centerChoosen = centre; 
    this.isEditCenterVisible = false;
    this.isEditEquipeVisible = true;
    this.isAddCenterVisible = false;
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

  setAddCenterVisible(){
    this.isAddCenterVisible = true;
    this.isEditCenterVisible = false;
    this.isEditEquipeVisible = false;
    console.log(this.isAddCenterVisible)
  }

  onUpdate(post: any) {
    this.post = post;
    console.log(JSON.stringify(post.value))
  }
}
