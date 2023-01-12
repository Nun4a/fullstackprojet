import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService, CentreService } from 'src/app/service';
import { Address, Center, Utilisateur } from 'src/app/Modele';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
})

export class AjoutAdminComponent implements OnInit {

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public mail: string | undefined;
  public password: string | undefined;
  public role: string = 'Admin';
  public maxid:number = 0;
  public userId: string| null = '';
  public modifiedUser: Utilisateur | undefined;

  searchText: string = '';

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
  public newAdmin: Utilisateur = {
    id:5,
    firstName:'',
    lastName:'',
    mail:'',
    password:'',
    role:'Admin',
    center:this.choosencenter
  }
 
  constructor(private centerService: CentreService, private httpClient:HttpClient, private adminService:AdminService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId)
    })
    
    this.adminService.maxId().subscribe((response: number) => {
        this.maxid = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onChooseClick(form: Center) {
    this.choosencenter = form;
  }

  public onAdd = (newAdmin:Utilisateur): void => {
    this.adminService.maxId().subscribe((response: number) => {
      this.maxid = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
    console.log(this.maxid)
    newAdmin.id = this.maxid +1;
    return this.adminService.saveAdminToServer(newAdmin)
  }
}
