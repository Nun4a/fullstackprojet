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
}
