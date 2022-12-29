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
  callbackAdminFunction: ((firstName: string, lastName: string, password: string, mail: string, phoneNumber: string, center: Center) => void) | undefined;
  @Input()
  centerList: Center[] | undefined;

  form!: FormGroup;
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;
  
  constructor(private _location: Location) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
      this.form = new FormGroup({
        lname: new FormControl(''),
        fname: new FormControl(''),
        password: new FormControl(''),
        mail: new FormControl(''),
        role: new FormControl(''),
        centre: new FormControl(this.centerList)
      });
  }

  backClicked = () => {
    this._location.back();
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    if(this.callbackAdminFunction ===undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    else this.callbackAdminFunction(postData.fname, postData.lname, postData.password, postData.mail, postData.role, postData.center);  }
}
