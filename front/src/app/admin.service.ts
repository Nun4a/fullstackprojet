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
    this.http.post('http://localhost:9797/api/addadmin' , { id:admin.id,
      firstName:admin.firstName,
      lastName:admin.lastName,
      mail:admin.mail,
      phoneNumber:admin.phoneNumber,
      center:admin.center
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

  deleteAdmin(id_user:any){
    return this.http.delete('http://localhost:9797/api/deleteadmin/'+id_user);
  }


  confDeleteAdmin(id_user:any) {
    let conf = confirm("Etes vous sûr?");
    if (conf) {
      this.deleteAdmin(id_user)
        .subscribe(data => {
          this.getAdmins();
        }, err => {
          console.log(err);
        })
    }
  }
}
