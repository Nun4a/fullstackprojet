import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Address, Utilisateur } from 'src/app/Modele';
import { Center } from 'src/app/Modele/Center.Model';
import { Location } from '@angular/common';
import { AdminService, CentreService } from 'src/app/service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})

export class FormEditComponent {

  @Input()
  callbackFunctionAdd: ((newAdmin:Utilisateur) => void) | undefined;
  @Input()
  callbackFunctionModif: ((newAdmin:Utilisateur) => void) | undefined;
  @Input()
  formType: boolean | undefined;
  @Input()
  centerList: Center[] | undefined;
  @Input()
  userId: string | null | undefined;

  form!: FormGroup;
  post: any = '';
  checkPassword: any;
  checkInUseEmail: any;
  modifiedUser: Utilisateur | undefined;

  public choosenaddress: Address ={
    id: 0,
    zipcode: '',
    street: '',
    city: '',
  }
  public choosencenter: Center =  {
    name: 'rien',
    id: 0,
    timetable: '',
    capacity: 0,
    address: this.choosenaddress
  }
  public newAdmin: Utilisateur = {id: 5, firstName: '', lastName: '', mail: '', password: '', role: 'Admin', center: this.choosencenter}
  
  public roleList = [
    {
      role: "Super Administrateur",
      roleValue: "SuperAdmin"
    },
    {
      role: "Admin",
      roleValue: "Admin"
    },
    {
      role: "Docteur",
      roleValue: "Doctor",
    },
    {
      role: "Patient",
      roleValue: "Patient"
    }
  ]
    
  constructor(private centerService:CentreService, private adminService:AdminService, private _location: Location) { 
    
  }

  ngOnInit() {
    this.getcenters();
    this.getModifiedUser();
    this.createForm(this.modifiedUser);
  }

  public getModifiedUser(){
    if(this.userId === undefined) return
    if(this.userId === null) return
    else{
      this.adminService.getAdminsById(this.userId).subscribe((response: Utilisateur) =>{
          this.modifiedUser = response;
          this.createForm(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
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

  getCenterChoosen = (e: any) =>{
    if(e.value === undefined) return
    else this.newAdmin.center = e.value;
  }

  createForm(user: Utilisateur|undefined) {
    if(user){
      this.form = new FormGroup({
        lname: new FormControl(user.lastName),
        fname: new FormControl(user.firstName),
        password: new FormControl(user.password),
        mail: new FormControl(user.mail),
        role: new FormControl(user.role),
        centre: new FormControl(user.center)
      });
    }
    else{
      this.form = new FormGroup({
        lname: new FormControl(''),
        fname: new FormControl(''),
        password: new FormControl(''),
        mail: new FormControl(''),
        role: new FormControl(''),
        centre: new FormControl('')
      });
    }
  }

  backClicked = () => {
    this._location.back();
  }

  onSubmit(post: any) {
    var postData;
    postData = post.value;
    this.newAdmin.firstName = postData.fname;
    this.newAdmin.lastName = postData.lname;
    this.newAdmin.password = postData.password;
    this.newAdmin.mail = postData.mail;
    this.newAdmin.role = postData.role;
    if(this.callbackFunctionAdd === undefined){
      console.log("callbackFunctionAdd du form undefined");
      return
    }
    this.callbackFunctionAdd(this.newAdmin);
  }

  onSubmitChange(post: any){
    if(!this.userId) return
    var postData;
    postData = post.value;
    this.newAdmin.id = Number(this.userId);
    this.newAdmin.firstName = postData.fname;
    this.newAdmin.lastName = postData.lname;
    this.newAdmin.password = postData.password;
    this.newAdmin.mail = postData.mail;
    this.newAdmin.role = postData.role;
    console.log(this.newAdmin)
    if(this.callbackFunctionModif === undefined){
      console.log("callbackFunctionModif du form undefined");
      return
    }
    this.callbackFunctionModif(this.newAdmin);
  }
}
