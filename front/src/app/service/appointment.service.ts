import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/Modele';

@Injectable({
    providedIn: 'root'
})

export class AppointmentService {
    constructor(private http: HttpClient){}

    public saveAppointmentToServer(appointment: Appointment){
      console.log(appointment)
        this.http.post('/api/appointment', {
            id: appointment.id,
            jour: appointment.day,
            patientMail: appointment.patientMail,
            centerId: appointment.centerId
        })
          .subscribe(
            () => {
            console.log('Ok');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
}