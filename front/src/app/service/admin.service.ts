import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    
  constructor(private http:HttpClient) {}



  public getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('/api/showadmin');
  }

  public saveAdminToServer(admin: Admin) {
    console.log(admin)
    this.http.post('/api/addadmin' , { 
      id:admin.id,
      firstName:admin.firstName,
      lastName:admin.lastName,
      mail:admin.mail,
      phoneNumber:admin.phoneNumber,
      address:admin.center.address
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
    return this.http.delete('/api/deleteadmin/'+id_user);
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
