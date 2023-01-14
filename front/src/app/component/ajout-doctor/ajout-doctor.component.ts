import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address, Center, Utilisateur } from 'src/app/Modele';
import { CentreService, DoctorService } from 'src/app/service';

@Component({
  selector: 'app-ajout-doctor',
  templateUrl: './ajout-doctor.component.html',
})
export class AjoutDoctorComponent implements OnInit {

  public centers: Center[] = [];
  public docSubscription: Subscription = new Subscription;
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
  public password: string | undefined;
  public role: string = 'Doctor';
  public maxid:number = 0;

  searchText: string = '';

  public newDoc: Utilisateur = {id:5,firstName:'',lastName:'',mail:'',password:'',role:'Admin',center:this.choosencenter}
  

  constructor(private centerService: CentreService, private httpClient:HttpClient, private docService:DoctorService) { }

  ngOnInit() {
    this.docSubscription = this.centerService.getCenters().subscribe(
      (center: Center[]) => {
        this.centers = center;
      }
    );
    this.getCenter();

    this.docService.maxId().subscribe((response: number) => {
      this.maxid = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }

  public getCenter(): void{
    this.centerService.getCenters().subscribe(
      (response: Center[]) => {
        this.centers = response;
        //console.log(this.centers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onChooseClick(form: Center) {
    this.choosencenter = form;
  }

  public onAdd = (newDoc:Utilisateur): void => {
    this.docService.maxId().subscribe((response: number) => {
      this.maxid = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
    console.log(this.maxid)
    newDoc.id = this.maxid +1;
    return this.docService.saveDocToServer(newDoc)
  }
}


