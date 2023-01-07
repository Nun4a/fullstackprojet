package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String day;
    private String patientMail;
    private int centerId;
    
    public Appointment(String day, String patientMail, int centerId){
        this.day = day;
        this.patientMail = patientMail;
        this.centerId = centerId;
    }

    public Appointment(){
        
    }
    
    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
    
    public String getPatientMail(){
        return patientMail;
    }

    public int getCenterId(){
        return centerId;
    }
}
