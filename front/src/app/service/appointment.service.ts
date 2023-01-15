import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
            centerId: appointment.centerId,
            doctorId: appointment.doctorId,
            utilisateur: appointment.utilisateur            
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

    public maxId():Observable<number>{
      return this.http.get<number>('/api/public/maxappointment');
    }
}