import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Address, Utilisateur } from 'src/app/Modele';
import { Center } from 'src/app/Modele/Center.Model';
import { AdminService, CentreService } from 'src/app/service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})

export class FormEditComponent {

  @Input()
  callbackFunction: ((newAdmin:Utilisateur) => void) | undefined;
  @Input()
  formType: boolean | undefined;
  @Input()
  centerList: Center[] | undefined;

  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;

  public choosenaddress: Address ={
    id: 0,
    zipcode: '',
    street:'',
    city:'',
  }
  public choosencenter: Center =  {
    name: 'rien',
    id: 0,
    timetable: '',
    capacity: 0,
    address:this.choosenaddress
  }
  public newAdmin: Utilisateur = {id:5,firstName:'',lastName:'',mail:'',password:'',role:'Admin',center:this.choosencenter}
  
  
  constructor(private centerService:CentreService, private adminService:AdminService) { 
    
  }

  

  ngOnInit() {
    this.getcenters();
    this.createForm();
    
  }

  public getcenters(): void{
    this.centerService.getCenters().subscribe(
      (response: Center[]) => {
        this.centerList = response;
        console.log(this.centerList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
        centre: new FormControl('')
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

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    this.newAdmin.firstName=postData.fname;
    this.newAdmin.lastName=postData.lname;
    this.newAdmin.password=postData.password;
    this.newAdmin.mail=postData.mail;
    this.newAdmin.center=postData.centre;
    this.newAdmin.role='Admin';
    console.log('form-edit' + postData.center);
    if(this.callbackFunction ===undefined){
      console.log("callbackFunction du form undefined");
      return
    }
    this.callbackFunction(this.newAdmin);
  }
}
