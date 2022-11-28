import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  status!: string;
  
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

  deleteAdmin(id_user: number): void {
    this.http.delete('http://localhost:9797/api/deleteadmin/' + id_user.toString()).subscribe(() => this.status = "Delete");
  }
}
