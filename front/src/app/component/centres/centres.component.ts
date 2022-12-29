import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { centerType } from './centres.types';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html'
})

export class CentresComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    this.createForm();
    this.centerEdit = false;
    this.equipEdit = false;
  }

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  searchText: string = '';

  centerEdit: boolean = false;
  equipEdit: boolean = false;
  chooseAvailable: boolean = true;

  centerChoosen!: centerType;

  //Charger les données des centres là dedans
  centre: centerType[] = [
    { id: 1, name: 'CH Narbonne', adress: 'Boulevard Dr Lacroix', codepostal: 11100, city: 'Narbonne' },
    { id: 2, name: 'Nancy - Tour Marcel Brot' , adress: '1, Rue Joseph Cugnot', codepostal: 54000, city: 'Nancy'}
  ];

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

  onUpdate(post: any) {
    this.post = post;
    console.log(JSON.stringify(post.value))
  }
}
