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
        this.http.post('/api/public/appointment', {
            id: appointment.id,
            day: appointment.day,
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

    public getAppointmentByCenterId(centerId: number) {
      return this.http.get<Appointment[]>('api/public/appointmentbycenter/'+centerId);
    }
}