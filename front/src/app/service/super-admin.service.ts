import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperAdmin } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http:HttpClient) {}



  public getSuperAdmins(): Observable<SuperAdmin[]> {
    return this.http.get<SuperAdmin[]>('/api/private/superadmin/showsuperadmin');
  }
}
