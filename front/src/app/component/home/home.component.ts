import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CentreService } from 'src/app/service';
import { Center } from 'src/app/Modele/Center.Model';
import { centerType } from './home.types';
import { reserveDataToSend } from './home.types';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Appointment } from 'src/app/Modele';
import { DatePipe } from '@angular/common';
import { DateFilterFn } from '@angular/material/datepicker';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  searchText: string = '';
  secondForm: boolean = true;
  reserveOk: boolean = true;

  centerChoosen!: Center;
  fname!: string;
  lname!: string;
  mail!: string;
  daterdv!: string;
  minDate!: Date;

  newAppointment!: Appointment;
  appointmentList: Appointment[] = [];
  appointmentDateFilter: Date[] = [];

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;

  constructor(private centerService: CentreService, private appointmentService: AppointmentService) {
    this.minDate = new Date();
   }

  //Charger les données des centres là dedans

  ngOnInit() {
    this.adminSubscription = this.centerService.getCenters().subscribe(
      (center: Center[]) => {
        this.centers = center;
      }
    );
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

  public getAppointment(centerId: number) {
    this.appointmentService.getAppointmentByCenterId(centerId).subscribe(
      (response: Appointment[]) => {
        this.appointmentList = response;
        console.log(this.appointmentList);
        this.dateTabFill(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onChooseClick(form: Center) {
    this.secondForm = !this.secondForm;
    this.centerChoosen = form;
    this.getAppointment(form.id);
  }

  dateTabFill = (appointment: Appointment[]) => {
    for(let value of appointment){
      this.appointmentDateFilter.push(this.stringToDate(value.day));
    }
    // console.log(this.appointmentDateFilter)
  }

  stringToDate(date: string): Date{
    let dateFormat = new Date(date);
    return dateFormat;
  }

  dateFilter: DateFilterFn<Date|null> = (date: Date | null) => {
    if(date === null) return false
    const day = date?.getDay();
    const blockedDate = this.appointmentDateFilter.map(date => date.getTime());
    return (!blockedDate.includes(date.getTime()));
  }

  onBackClick(){
    this.secondForm=!this.secondForm
    this.centerChoosen = 
      {
        id: 0,
        name: '',
        timetable: '',
        capacity: 0,
        address: {
          id: -1,
          zipcode: '',
          street: '',
          city: '',
        }
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

  sendData = () => {
    const bufferData: Appointment = {
      id: 1,
      centerId: this.centerChoosen.id,
      patientMail: this.mail,
      day: this.daterdv,
    } 
    return this.appointmentService.saveAppointmentToServer(bufferData)
  }
}
