import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})

export class FormEditComponent {

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;

  constructor() { 
    
  }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.form = new FormGroup({
      lname: new FormControl(''),
      fname: new FormControl(''),
      password: new FormControl(''),
      mail: new FormControl(''),
      role: new FormControl(''),
      centre: new FormControl('')
    });
  }

  get name() {
    return this.form.get('name') as FormControl
  }

  onSubmit(post: any) {
    this.post = post;
    console.log(JSON.stringify(post.value))
  }

}
