import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Admin } from '../../Modele/Admin.Model';
import { AdminService } from '../../admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css'],
  providers: [ AdminService]
})
export class GestionAdminComponent implements OnInit {

  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;
  constructor(private adminService: AdminService) { }

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
        console.log(this.admins);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  deleteAdmin(id:number){
    this.adminService.confDeleteAdmin(id);
  }


}
