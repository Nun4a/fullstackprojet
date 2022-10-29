import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './Modele/Admin.Model';
import { SuperAdmin } from './Modele/SuperAdmin.Model';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http:HttpClient) {}



  public getSuperAdmins(): Observable<SuperAdmin[]> {
    return this.http.get<SuperAdmin[]>('http://localhost:9797/api/showsuperadmin');
  }
}
