import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { Admin } from '../Modele/Admin.Model';
import { SuperAdmin } from '../Modele/SuperAdmin.Model';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public superAdmins: SuperAdmin[] = [];
  public adminSubscription: Subscription = new Subscription;
  public erreur:number =0;
  constructor(private superAdminService: SuperAdminService, private router:Router) { }

  ngOnInit() {
    this.adminSubscription = this.superAdminService.getSuperAdmins().subscribe(
      (superAdmins: SuperAdmin[]) => {
        this.superAdmins = superAdmins;
      }
    );
    this.getSuperAdmins();
  }
  public getSuperAdmins(): void{
    this.superAdminService.getSuperAdmins().subscribe(
      (response: SuperAdmin[]) => {
        this.superAdmins = response;
        console.log(this.superAdmins);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const password = form.value['password'];
    if (this.exist(name,password) == 1){
      console.log("youpi, on est connecté! ")
      this.router.navigate(['gestion-admin'])
    }
    else{
      this.erreur=1;
    }


  }
  exist(pseudo : String, password : String){
    let p:boolean = false;
    let n:boolean = false;
    for (let i=0;i<this.superAdmins.length;i++){
      if (pseudo==this.superAdmins[i].firstName){
        n=true;
      }
      if (password==this.superAdmins[i].lastName){
        p=true;
      }
    }
    if (p==true&&n==true){
      return 1;
    }
    else {
      return 0;
    }
  }

}
