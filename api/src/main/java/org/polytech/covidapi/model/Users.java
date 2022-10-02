package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String fname;
    private String lname;
    private String mail;
    private String telephone;
    private String center_city;
    private boolean vaccinate;


    public Users (){
        
    }

    public Users (int id, String fname, String lname, String mail, String telephone, String center_city, boolean vaccinate){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.mail = mail;
        this.telephone = telephone;
        this.center_city = center_city;
        this.vaccinate = vaccinate;
    }

    public int getId(){
        return this.id;
    }

    public String getFname(){
        return this.fname;
    }

    public String getLname(){
        return this.lname;
    }

    public String getMail(){
        return this.mail;
    }

    public String getTelephone(){
        return this.telephone;
    }

    public String getCenter(){
        return this.center_city;
    }

    public boolean getVaccinate(){
        return this.vaccinate;
    }
}
