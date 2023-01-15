import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Modele/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) {}



  public getPatient(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>('/api/private/showpatient');
  }

  public maxId():Observable<number>{
    return this.http.get<number>('/api/public/max');
  }

  public savePatientToServer(patient: Utilisateur) {
    this.http.post('/api/public/addpatient' , { id:patient.id,
      firstName:patient.firstName,
      lastName:patient.lastName,
      mail:patient.mail,
      password:patient.password,
      role:"Patient",
      center:patient.center
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

  deletePatient(id_user:number){
    return this.http.delete('/api/private/deletepatient/'+id_user);
  }


  confDeletePatient(id_user:number) {
    let conf = confirm("Etes vous sûr?");
    if (conf) {
      this.deletePatient(id_user)
        .subscribe(data => {
          this.getPatient();
        }, err => {
          console.log(err);
        })
    }
  }

  public getPatientById(id: number){
    return this.http.get<Utilisateur>('/api/private/showpatient/'+id);
  }
}
