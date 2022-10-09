import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Admin } from "../Modele/Admin.Model";

@Injectable()
export class AdminServices{

    private admin: Admin[] = [new Admin(0,'null','null',"null@null.com","1234567",0)];
    private retour:string = "";
    adminSubject = new Subject<Admin[]>();
    
  constructor(private httpClient:HttpClient) {}

  emitAdmin() {
    this.adminSubject.next(this.admin.slice());
  }


    getAdminFromServer() {
        this.httpClient
          .get<any[]>('http://localhost:9797/showadmin')
          .subscribe(
            (response) => {
                this.admin = response
              this.emitAdmin();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    } 
}
