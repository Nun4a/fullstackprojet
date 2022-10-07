import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  //Charger les données des centres là dedans
  centre: centerType[] = [
    { id: 1, name: 'CH Narbonne', adress: 'Boulevard Dr Lacroix, 11100 Narbonne' },
    { id: 2, name: 'Nancy - Tour Marcel Brot' , adress: '1, Rue Joseph Cugnot, 54000 Nancy'}
  ];

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
