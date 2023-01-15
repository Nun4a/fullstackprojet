import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  public maxidcenter:number = 0;
  public maxidaddress:number = 0;


  public newAddress: Address = {id:0,street:'',zipcode:'',city:''}
  public newCenter:Center = {id:0, name:'',capacity:0,timetable:'',address:this.newAddress}

  constructor(private centerService: CentreService, private httpClient:HttpClient, private addressService:AddressService) { }

  ngOnInit(): void {

    this.centerService.maxId().subscribe((response: number) => {
      this.maxidcenter = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

  this.addressService.maxId().subscribe((response: number) => {
    this.maxidaddress = response;
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);
  }

  addAddress = (street: string, zipcode: string, city: string) => {
    if(this.addressService === undefined) return
    else {
      this.addressService.maxId().subscribe((response: number) => {
        this.maxidaddress = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
      this.newAddress = {
      street: street,
      zipcode: zipcode,
      city: city,
      id: this.maxidaddress +1,
    }
    return this.addressService.saveAddressToServer(this.newAddress)
    }
  }

  addCentre = (name: string, capacity: number) => {

    this.centerService.maxId().subscribe((response: number) => {
      this.maxidcenter = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
    setTimeout(() => {
      this.newCenter = {
        name: name,
        capacity: capacity,
        timetable: '',
        id: this.maxidcenter +1,
        address: this.newAddress
      } 
      return this.centerService.saveCenterToServer(this.newCenter)
    }, 500 )
  }

  changeAddress = (id: number, street: string, zipcode: string, city: string) => {
    if(this.addressService === undefined) return
    else {
      this.newAddress = {
      street: street,
      zipcode: zipcode,
      city: city,
      id: id,
    }
    console.log(this.newAddress)
    return this.addressService.changeInfo(this.newAddress)
    }
  }

  changeCentre = (id: number, name: string, capacity: number) => {
    setTimeout(() => {
      this.newCenter = {
        name: name,
        capacity: capacity,
        timetable: '',
        id: id,
        address: this.newAddress
      } 
      return this.centerService.changeInfo(this.newCenter)
    }, 500 )
  }
}
