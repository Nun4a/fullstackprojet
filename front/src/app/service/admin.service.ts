import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin, Utilisateur } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    
  constructor(private http:HttpClient) {}



  public getAdmins(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>('/api/showadmin');
  }

  public maxId():Observable<number>{
    return this.http.get<number>('/api/max');
  }

  public saveAdminToServer(admin: Utilisateur) {
    this.http.post('/api/addadmin' , { id:admin.id,
      firstName:admin.firstName,
      lastName:admin.lastName,
      mail:admin.mail,
      password:admin.password,
      role:"Admin",
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

  deleteAdmin(id_user:number){
    return this.http.delete('/api/deleteadmin/'+id_user);
  }


  confDeleteAdmin(id_user:number) {
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
