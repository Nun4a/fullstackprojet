import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Center } from 'src/app/Modele';


@Component({
  selector: 'app-form-center',
  templateUrl: './form-center.component.html',
})
export class FormCenterComponent implements OnInit {

  @Input()
  callbackCenterFunction: ((name: string, address: string, codepostal: string, city: string) => void) | undefined;
  @Input()
  centerChoosen : Center | undefined;
  
  constructor(private _location: Location) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    if(this.centerChoosen === undefined){
      this.form = new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        codepostal: new FormControl(''),
        city: new FormControl('')
      });
    }
    else {
      this.form.setValue({
        name: this.centerChoosen.name,
        adress: this.centerChoosen.address,
      })
    }
      
  }

  backClicked = () => {
    this._location.back();
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    if(this.callbackCenterFunction ===undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    else this.callbackCenterFunction(postData.name, postData.address, postData. codepostal, postData.city);  }
}
