import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CentreService } from 'src/app/service';
import { Center } from 'src/app/Modele/Center.Model';
import { centerType } from './home.types';
import { reserveDataToSend } from './home.types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  searchText: string = '';
  secondForm: boolean = true;
  reserveOk: boolean = true;

  centerChoosen!: centerType;
  fname!: string;
  lname!: string;
  mail!: string;
  daterdv!: string;

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;

  constructor(private centerService: CentreService) { }

  //Charger les données des centres là dedans

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

  onChooseClick(form: centerType) {
    this.secondForm = !this.secondForm
    this.centerChoosen = form  
  }

  onBackClick(){
    this.secondForm=!this.secondForm
    this.centerChoosen = 
      {
        id: 0,
        name: '',
        adress: ''
      }
  }

  onReserveClick(form: NgForm){
    this.fname = form.value.fname;
    this.lname = form.value.lname;
    this.mail = form.value.mail;
    this.daterdv = form.value.daterdv;
    this.reserveOk = !this.reserveOk;
    this.sendData()
  }

  sendData(){
    const bufferData: reserveDataToSend = {
      centerId: this.centerChoosen.id,
      fname: this.fname,
      lname: this.lname,
      mail: this.mail,
      daterdv: this.daterdv
    } 
    console.log(bufferData)
  }
}
