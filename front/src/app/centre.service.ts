import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from './Modele/Center.Model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http:HttpClient) { }

  public getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>('http://localhost:9797/api/showcenter');
  }
}
