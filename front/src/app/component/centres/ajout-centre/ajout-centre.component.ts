import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AddressService, CentreService } from 'src/app/service';
import { Address, Center } from 'src/app/Modele';
import { FormControl, FormGroup } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-ajout-centre',
  templateUrl: './ajout-centre.component.html'
})
export class AjoutCentreComponent implements OnInit {

  @Input() 
  addCenterForm: boolean = false;
  @Input() 
  modifyCenterForm: boolean = false;
  @Input()
  centerToModify!: Center;

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
    console.log(this.centerToModify)
    if(this.centerToModify) this.createModifyForm()
    else this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      street: new FormControl(''),
      zipcode: new FormControl(''),
      city: new FormControl(''),
      name: new FormControl(''),
      capacity: new FormControl(''),
      timetable: new FormControl('')
    });
  }

  createModifyForm() {
    this.form.setValue({
      street: this.centerToModify.address.street,
      zipcode:  this.centerToModify.address.zipcode,
      city: this.centerToModify.address.city,
      name: this.centerToModify.name,
      capacity: this.centerToModify.capacity,
      timetable: this.centerToModify.timetable
    });
  }


  public ajouterCentre(post: any) {
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

  modifierCentre = (post: any) => {
    this.street = post.value.street;
    this.zipcode = post.value.zipcode;
    this.city = post.value.city;
    this.modifyAddress(this.street,this.zipcode,this.city)
    this.name = post.value.name;
    this.capacity = post.value.capacity;
    this.timetable = post.value.timetable;
    this.modifyCentre(this.name,this.capacity,this.timetable, this.newAddress)
  }

  public modifyAddress(street: any, zipcode: any, city: any) {
    this.newAddress.street=street
    this.newAddress.zipcode=zipcode
    this.newAddress.city=city
    return this.addressService.modifyAddressToServer(this.newAddress)
  }

  public modifyCentre(name: any, capacity: any, timetable: any, address: any) {
    this.newCenter.name=name
    this.newCenter.capacity=capacity
    this.newCenter.timetable=timetable
    this.newCenter.address=address
    return this.centerService.modifyCenterToServer(this.newCenter)
  }

}
