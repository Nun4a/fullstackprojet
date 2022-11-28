import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Admin } from 'src/app/Modele';
import { AdminService } from 'src/app/service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
})

export class GestionAdminComponent implements OnInit {

  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;
  constructor(private adminService: AdminService) { 

  }

  ngOnInit() {
    this.adminSubscription = this.adminService.getAdmins().subscribe(
      (admins: Admin[]) => {
        this.admins = admins;
      }
    );
    this.getAdmins();
  }

  public getAdmins(): void{
    this.adminService.getAdmins().subscribe(
      (response: Admin[]) => {
        this.admins = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  changeUser(id: number){
    console.log(id)
  }

  deleteUser(id:number){
    this.adminService.deleteAdmin(id)
  }
}