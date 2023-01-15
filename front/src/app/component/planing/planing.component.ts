import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Appointment, Center, Utilisateur } from 'src/app/Modele';
import { CentreService, DoctorService, PatientService } from 'src/app/service';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html'
})

export class PlaningComponent implements OnInit {

  public centerSubscription : Subscription = new Subscription
  public appointmentSubscription: Subscription = new Subscription
  public appointment: Appointment[] = [];
  public centers: Center[] = [];
  public patient!: Utilisateur;
  public centerChoosen!: Center;
  public doctorList: Utilisateur[] = [];

  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService, private centerService: CentreService, private patientService:PatientService, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getCenters();
    this.getDoctors();
  }

  getDoctors = () => {
    this.doctorService.getDoc().subscribe(
      (response: Utilisateur[]) => {
        this.doctorList = response
        console.log(this.doctorList)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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

  public getUser(id:any): void{
     this.patientService.getPatientById(id).subscribe((response: Utilisateur) => {
      this.patient = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
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

  centerForm = this.formBuilder.group({
    center: [null, Validators.required]
  })

  findDoctorById = (id: number) : string => {
    return this.doctorList.find(elem => elem.id === id)?.firstName + " " + this.doctorList.find(elem => elem.id === id)?.lastName;
  }
}
