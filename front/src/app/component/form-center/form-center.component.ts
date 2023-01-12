import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Center } from 'src/app/Modele';


@Component({
  selector: 'app-form-center',
  templateUrl: './form-center.component.html',
})
export class FormCenterComponent implements OnInit {

  @Input()
  callbackCenterFunction: ((name: string, capacity: number) => void) | undefined;
  @Input()
  callbackAddressFunction:((street: string, zipcode: string, city: string) => void) | undefined;
  @Input()
  centerChoosen : Center | undefined;
  
  constructor(private _location: Location) {this.ngOnInit()}

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.createForm()
  }

  createForm() {
    if(this.centerChoosen === undefined){
      this.form = new FormGroup({
        name: new FormControl(''),
        capacity : new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
        street: new FormControl('')
      });
    }
    else {
      this.form.setValue({
        name: this.centerChoosen.name,
        capacity : this.centerChoosen.capacity,
        city: this.centerChoosen.address.city,
        zipcode: this.centerChoosen.address.zipcode,
        street: this.centerChoosen.address.street,
      })
    }
      
  }

  backClicked = () => {
    this._location.back();
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    if(this.callbackCenterFunction ===undefined || this.callbackAddressFunction === undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    else {
      this.callbackCenterFunction(postData.name, postData.capacity);  
      this.callbackAddressFunction(postData.street, postData.zipcode, postData.city);
    }
  }

  onSubmitChange(post: any){
    
  }
}