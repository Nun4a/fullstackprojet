import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService, CentreService } from 'src/app/service';
import { Address, Admin, Center } from 'src/app/Modele';
@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
})
export class AjoutAdminComponent implements OnInit {

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;
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
  public firstName: string | undefined;
  public lastName: string | undefined;
  public mail: string | undefined;
  public phoneNumber: string | undefined;
  public role: string | undefined;

  searchText: string = '';

  public newAdmin: Admin = {id:5,firstName:'',lastName:'',mail:'',phoneNumber:'',center:this.choosencenter}
  

  constructor(private centerService: CentreService, private httpClient:HttpClient, private adminService:AdminService) { }

  ngOnInit() {
    this.adminSubscription = this.centerService.getCenters().subscribe(
      (center: Center[]) => {
        this.centers = center;
      }
    );
    this.getCenter();
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

  onChooseClick(form: Center) {
    this.choosencenter = form;
  }

  public onAdd = (firstName: string, lastName: string, mail: string, phoneNumber: string, center: Center): void => {
    this.newAdmin.firstName=firstName;
    this.newAdmin.lastName=lastName;
    this.newAdmin.mail=mail;
    this.newAdmin.phoneNumber=phoneNumber;
    this.newAdmin.center=center;

    return this.adminService.saveAdminToServer(this.newAdmin)
  }
}