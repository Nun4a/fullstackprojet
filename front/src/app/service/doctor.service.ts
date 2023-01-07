import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utilisateur } from "../Modele";

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    constructor(private http: HttpClient){}

    public getDoctorByCenterId(centerId: number){
        return this.http.get<Utilisateur[]>('/api/showdocbycenter/'+centerId)
    }
}