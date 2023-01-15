import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/Modele';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }


  public saveAddressToServer(address: Address) {
    this.http.post('/api/private/address' , { id:address.id,
      street:address.street,
      zipcode:address.zipcode,
      city:address.city,
    })
      .subscribe(
        () => {
          console.log('Ok');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  public changeInfo(address: Address){
    this.http.post('/api/private/changeaddress', {
      id: address.id,
      street: address.street,
      zipcode: address.zipcode,
      city: address.city
    })
      .subscribe(
        () => {
          console.log('Ok');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  public maxId():Observable<number>{
    return this.http.get<number>('/api/public/maxaddress');
  }
}
