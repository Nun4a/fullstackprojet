import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Address, Center } from 'src/app/Modele';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-form-center',
  templateUrl: './form-center.component.html',
})
export class FormCenterComponent implements OnInit {

  @Input()
  callbackFunctionAddCenter: ((name: string, capacity: number) => void) | undefined;
  @Input()
  callbackFunctionAddAddress:((street: string, zipcode: string, city: string) => void) | undefined;
  @Input()
  callbackFunctionChangeCenter: ((id: number, name: string, capacity: number) => void) | undefined;
  @Input()
  callbackFunctionChangeAddress:((id: number, street: string, zipcode: string, city: string) => void) | undefined;
  @Input()
  centerChoosen : Center | undefined;
  
  public center!: Center;
  public address!: Address;

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
    
    if(this.callbackFunctionAddCenter ===undefined || this.callbackFunctionAddAddress === undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    else {
      this.callbackFunctionAddCenter(postData.name, postData.capacity);  
      this.callbackFunctionAddAddress(postData.street, postData.zipcode, postData.city);
      this._location.back();
    }
  }

  onSubmitChange(post: any){
    var postData;
    postData = post.value;
    if(this.centerChoosen === undefined) return;
    if(this.callbackFunctionChangeCenter ===undefined || this.callbackFunctionChangeAddress === undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    else {
      this.callbackFunctionChangeCenter( this.centerChoosen?.id ,postData.name, postData.capacity);  
      this.callbackFunctionChangeAddress(this.centerChoosen?.address.id, postData.street, postData.zipcode, postData.city);
      // location.reload();
    }
  }
}