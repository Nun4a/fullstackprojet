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
    private String jour;
    private String patientMail;
    private int centerId;
    
    public Appointment(String jour, String patientMail, int centerId){
        this.jour = jour;
        this.patientMail = patientMail;
        this.centerId = centerId;
    }

    public Appointment(){
        
    }
    
    public String getJour() {
        return jour;
    }

    public void setJour(String jour) {
        this.jour = jour;
    }
    
    public String getPatientMail(){
        return patientMail;
    }

    public int getCenterId(){
        return centerId;
    }
}
