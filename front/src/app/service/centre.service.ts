import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http:HttpClient) { }

  public getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>('http://localhost:9797/api/showcenter');
  }
  public saveCenterToServer(centre: Center) {
    this.http.post('http://localhost:9797/api/addcenter' , { id:centre.id,
      name:centre.name,
      capacity:centre.capacity,
      timetable:centre.timetable,
      address:centre.address,
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

  public modifyCenterToServer(centre: Center) {
    this.http.post('http://localhost:9797/api/modifycenter' , { id:centre.id,
      name:centre.name,
      capacity:centre.capacity,
      timetable:centre.timetable,
      address:centre.address,
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
