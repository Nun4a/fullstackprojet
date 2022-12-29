import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService, CentreService } from 'src/app/service';
import { Address, Center } from 'src/app/Modele';

@Component({
  selector: 'app-ajout-centre',
  templateUrl: './ajout-centre.component.html'
})
export class AjoutCentreComponent implements OnInit {

  public street:any
  public zipcode:any
  public city:any
  public name:any
  public capacity:any
  public timetable:any
  public centers: Center[] = [];

  public newAddress: Address = {id:0,street:'',zipcode:'',city:''}
  public newCenter:Center = {id:0, name:'',capacity:0,timetable:'',address:this.newAddress}

  constructor(private centerService: CentreService, private httpClient:HttpClient, private addressService:AddressService) { }

  ngOnInit(): void {}

  public ajouterCentre() {
    this.street=(<HTMLInputElement>document.getElementById("street")).value;
    this.zipcode=(<HTMLInputElement>document.getElementById("zipcode")).value;
    this.city=(<HTMLInputElement>document.getElementById("city")).value;
    this.addAddress(this.street,this.zipcode,this.city)
    this.name=(<HTMLInputElement>document.getElementById("name")).value;
    this.capacity=(<HTMLInputElement>document.getElementById("capacity")).value;
    this.timetable=(<HTMLInputElement>document.getElementById("timetable")).value;
    this.addCentre(this.name,this.capacity,this.timetable, this.newAddress)
  }


  public addAddress(street: any, zipcode: any, city: any) {
    this.newAddress.street=street
    this.newAddress.zipcode=zipcode
    this.newAddress.city=city

    return this.addressService.saveAddressToServer(this.newAddress)
  }

  public addCentre(name: any, capacity: any, timetable: any, address: any) {
    this.newCenter.name=name
    this.newCenter.capacity=capacity
    this.newCenter.timetable=timetable
    this.newCenter.address=address
    return this.centerService.saveCenterToServer(this.newCenter)
  }


}
