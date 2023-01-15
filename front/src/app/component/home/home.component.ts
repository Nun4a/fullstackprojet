import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CentreService, PatientService } from 'src/app/service';
import { Center } from 'src/app/Modele/Center.Model';
import { centerType } from './home.types';
import { reserveDataToSend } from './home.types';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Appointment, Utilisateur } from 'src/app/Modele';
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

  newAppointment!: Appointment;

  public centers: Center[] = [];
  public adminSubscription: Subscription = new Subscription;
  public user!: Utilisateur
  public maxidUser = 0
  public maxidApp = 0
  public appointment: Appointment[] = [];


  constructor(private centerService: CentreService, private appointmentService: AppointmentService, private patientService:PatientService) { }

  //Charger les données des centres là dedans

  ngOnInit() {
    this.adminSubscription = this.centerService.getCenters().subscribe(
      (center: Center[]) => {
        this.centers = center;
      }
    );
    this.getCenter();
    this.max();
    this.maxbis();
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

  onChooseClick(form: Center) {
    this.secondForm = !this.secondForm
    this.centerChoosen = form  
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

  max(){
    this.patientService.maxId().subscribe((response: number) => {
      this.maxidUser = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }

  maxbis(){
    this.appointmentService.maxId().subscribe((response: number) => {
      this.maxidApp = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }

  onReserveClick(form: NgForm){
    this.fname = form.value.fname;
    this.lname = form.value.lname;
    this.mail = form.value.mail;
    this.daterdv = form.value.daterdv;
    this.reserveOk = !this.reserveOk;
    this.saveUser()
    this.SaveAppointement();
  }

  saveUser = () => {
    this.max()
    this.user = {
      id: this.maxidUser + 1,
      firstName: this.fname,
      lastName: this.lname,
      password: '',
      mail: this.mail,
      role: 'Patient',
      center: this.centerChoosen
    } 
    this.patientService.savePatientToServer(this.user)
  }

  SaveAppointement= () => {
    this.maxbis()
    this.newAppointment= {
      id: this.maxidApp +1,
      centerId: this.centerChoosen.id,
      available: false,
      day: this.daterdv,
      doctorId: 0,
      utilisateur: {
        id: this.maxidUser + 1,
        firstName: this.fname,
        lastName: this.lname,
        password: '',
        mail: this.mail,
        role: 'Patient',
        center: this.centerChoosen
      } 
    } 
    return this.appointmentService.saveAppointmentToServer(this.newAppointment)

  }

  public getAppointment = (e: any) => {
    this.appointmentService.getAppointmentByCenterId(e.value).subscribe(
      (response: Appointment[]) => {
        this.appointment = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    
  }

    
}

