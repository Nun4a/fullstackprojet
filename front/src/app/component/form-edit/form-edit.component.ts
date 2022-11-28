import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Center } from 'src/app/Modele/Center.Model';
import { CentreService } from 'src/app/service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})

export class FormEditComponent {

  @Input()
  callbackFunction: ((firstName: string, lastName: string, mail: string, phoneNumber: string, center: Center) => void) | undefined;
  @Input()
  formType: boolean | undefined;
  @Input()
  public centers: Center[] = [];
  
  public choosenCenter!: Center;

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;

  private centerService!: CentreService;
  
  constructor() { 
    
  }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    if(this.formType === true){
      let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        mail: new FormControl(''),
        phoneNumber: new FormControl(''),
        center: new FormControl(this.centers)
      });
    }
    else{
      this.form = new FormGroup({
        centerName: new FormControl(''),
        adress: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl('')
      });
    }
  }

  public getCenter(): void{
    this.centerService.getCenters().subscribe(
      (response: Center[]) => {
        this.centers = response;
        console.log(this.centers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    if(this.callbackFunction ===undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    this.callbackFunction(postData.firstName, postData.lastName, postData.mail, postData.phoneNumber, this.choosenCenter);
  }
}
