import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { CentreService } from '../centre.service';
import { Admin } from '../Modele/Admin.Model';
import { Center } from '../Modele/Center.Model';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.css']
})
export class AjoutAdminComponent implements OnInit {

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;
  public choosencenter: Center =  {
    name: 'rien',
    id: 0,
    timetable: '',
    capacity: 0
  }
  public firstName:any
  public lastName: any
  public mail:any
  public phoneNumber:any



  searchText: string = '';

  public newAdmin: Admin = {id:5,firstName:'',lastName:'',mail:'',phoneNumber:'',center:this.choosencenter,}
  

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
    this.choosencenter = form
  }


  public ajouterAdmin() {
    this.firstName=(<HTMLInputElement>document.getElementById("firstName")).value;
    this.lastName=(<HTMLInputElement>document.getElementById("lastName")).value;
    this.mail=(<HTMLInputElement>document.getElementById("mail")).value;
    this.phoneNumber=(<HTMLInputElement>document.getElementById("phoneNumber")).value;
      this.onAjouter(this.firstName,this.lastName,this.mail, this.phoneNumber, this.choosencenter)
    }
  public onAjouter(firstName: any, lastName: any, mail: any, phoneNumber: any,center:any) {
    this.newAdmin.firstName=firstName
    this.newAdmin.lastName=lastName
    this.newAdmin.mail=mail
    this.newAdmin.phoneNumber=phoneNumber
    this.newAdmin.center=center
    return this.adminService.saveAdminToServer(this.newAdmin)
  }



}
