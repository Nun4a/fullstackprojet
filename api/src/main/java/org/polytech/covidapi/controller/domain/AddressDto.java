package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
//@Table(name = "addresses")
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String street;
    private String zipcode;
    private String city;

    public Address (){

    }


    public Address(int id, String street, String zipcode, String city) {
        this.id = id;
        this.street = street;
        this.zipcode = zipcode;
        this.city = city;
    }


    public int getId() {
        return this.id;
    }

    public String getStreet() {
        return this.street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZipcode() {
        return this.zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }


    @Override
    public String toString() {
        return "Address [id=" + id + ", street=" + street + ", zipcode=" + zipcode + ", city=" + city + "]";
    }

}
