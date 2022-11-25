import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Admin } from 'src/app/Modele';
import { AdminService } from 'src/app/service';
import { HttpErrorResponse } from '@angular/common/http';
import { dataSourceType } from 'src/app/component/datagrid';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  providers: [ AdminService]
})
export class GestionAdminComponent implements OnInit {

  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;
  constructor(private adminService: AdminService) { }
  data = data;

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

  changeAdmin(id: number){
    console.log(id)
  }

  deleteAdmin(id:number){
    this.adminService.confDeleteAdmin(id);
  }
}


const data: dataSourceType[] = [
  {id: 1, name:"John Doe"},
  {id: 2, name:"Jaine Doe"}
]

