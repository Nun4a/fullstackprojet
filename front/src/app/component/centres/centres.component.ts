import { HttpErrorResponse } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Admin, Center, Utilisateur } from 'src/app/Modele';
import { AdminService, CentreService } from 'src/app/service';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html'
})

export class CentresComponent implements OnInit {

  public centers: Center[] = [];
  public centerSubscription : Subscription = new Subscription
  public adminSubscription : Subscription = new Subscription
  public admins: Utilisateur[] = [];
  form!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  searchText: string = '';

  centerEdit: boolean = false;
  equipEdit: boolean = false;
  chooseAvailable: boolean = true;

  centerChoosen!: Center;


  constructor(private centerService: CentreService, private adminService: AdminService) { 
  }

  ngOnInit(): void {
    this.centerEdit = false;
    this.equipEdit = false;
    this.centerSubscription = this.centerService.getCenters().subscribe(
      (centers: Center[]) => {
        this.centers = centers;
      }
    );
    this.getCenters();
  }

  public getCenters(): void{
    this.centerService.getCenters().subscribe(
      (response: Center[]) => {
        this.centers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onCenterEdit(centre: any){
    this.centerEdit = true;
    this.equipEdit = false;
    this.centerChoosen = centre
  }

  onEquipClick(centre?: any){
    if(centre !== undefined) this.centerChoosen = centre; 
    this.centerEdit = false;
    this.equipEdit = true;

    this.adminSubscription = this.adminService.getAdmins().subscribe(
      (response: Utilisateur[]) => {
        this.admins = response;
      }
    );
    this.getAdmins();

    //Faire pareil avec médecin
    // this.adminSubscription = this.adminService.getAdmins().subscribe(
    //   (admins: Admin[]) => {
    //     this.admins = admins;
    //   }
    // );
    // this.getAdmins();
  }

  public getAdmins(): void{
    this.adminService.getAdmins().subscribe(
      (response: Utilisateur[]) => {
        this.admins = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdate(post: any) {
    this.post = post;
  }
}
