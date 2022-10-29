import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin } from './Modele/Admin.Model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    
  constructor(private http:HttpClient) {}



  public getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('http://localhost:9797/api/showadmin');
  }

  public saveAdminToServer(admin: Admin) {
    this.http.post('http://localhost:9797/admins' , { id:admin.id,
      firstName:admin.firstName,
      lastName:admin.lastName,
      mail:admin.mail,
      phoneNumber:admin.phoneNumber,
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
