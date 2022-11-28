import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService, CentreService } from 'src/app/service';
import { Address, Center } from 'src/app/Modele';
import { FormControl, FormGroup } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-ajout-centre',
  templateUrl: './ajout-centre.component.html'
})
export class AjoutCentreComponent implements OnInit {

  form!: FormGroup;
  public street!: string
  public zipcode!: string
  public city!: string
  public name!: string
  public capacity!: number
  public timetable!: number
  post: any = '';


  public newAddress: Address = {id:0,street:'',zipcode:'',city:''}
  public newCenter:Center = {id:0, name:'',capacity:0,timetable:'',address:this.newAddress}

  constructor(private centerService: CentreService, private httpClient:HttpClient, private addressService:AddressService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.form = new FormGroup({
      street: new FormControl(''),
      zipcode: new FormControl(''),
      city: new FormControl(''),
      name: new FormControl(''),
      capacity: new FormControl(''),
      timetable: new FormControl('')
    });
  }


  public ajouterCentre(post: any) {
    console.log(post)
    this.street = post.value.street;
    this.zipcode = post.value.zipcode;
    this.city = post.value.city;
    this.addAddress(this.street,this.zipcode,this.city)
    this.name = post.value.name;
    this.capacity = post.value.capacity;
    this.timetable = post.value.timetable;
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
