import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Center } from 'src/app/Modele/Center.Model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})

export class FormEditComponent {

  @Input()
  callbackFunction: ((firstName: string, lastName: string, password: string, mail: string, phoneNumber: string, center: Center) => void) | undefined;
  @Input()
  formType: boolean | undefined;
  @Input()
  centerList: Center[] | undefined;

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;
  
  constructor(private _location: Location) { 
    
  }

  ngOnInit() {
    this.createForm();
    console.log(this.formType);
  }

  createForm() {
    if(this.formType === true){
      let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.form = new FormGroup({
        lname: new FormControl(''),
        fname: new FormControl(''),
        password: new FormControl(''),
        mail: new FormControl(''),
        role: new FormControl(''),
        centre: new FormControl(this.centerList)
      });
    }
    else{
      this.form = new FormGroup({
        centerName: new FormControl(''),
        address: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl('')
      });
    } 
  }

  backClicked = () => {
    this._location.back();
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    if(this.callbackFunction ===undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    this.callbackFunction(postData.fname, postData.lname, postData.password, postData.mail, postData.role, postData.center);
  }
}
