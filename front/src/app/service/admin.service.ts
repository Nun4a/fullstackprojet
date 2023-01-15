import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin, Utilisateur } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    
  constructor(private http:HttpClient) {}

  public getAdminsById(id: string) {
    return this.http.get<Utilisateur>('/api/private/admin/showadmin/'+id);
  }

  public getAdmins(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>('/api/private/admin/showadmin');
  }

  public maxId():Observable<number>{
    return this.http.get<number>('/api/public/max');
  }

  public saveAdminToServer(admin: Utilisateur) {
    this.http.post('/api/private/admin/addadmin' , { id:admin.id,
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

  public changeInformations(user: Utilisateur){
    this.http.post('api/private/changeadmin', {
      id: user.id,
      firstName: user.firstName,
      mail: user.mail,
      role: user.role,
      center:user.center
    }).subscribe(
      () => {
        console.log('Ok');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  deleteAdmin(id_user:number){
    return this.http.delete('/api/private/admin/deleteadmin/'+id_user);
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

  public getAdminByCenterId(centerId: number){
    return this.http.get<Utilisateur[]>('/api/private/showadminbycenter/'+centerId);
  }
}
