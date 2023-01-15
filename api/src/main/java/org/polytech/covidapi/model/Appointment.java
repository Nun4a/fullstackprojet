package org.polytech.covidapi.model;

import javax.persistence.*;

import org.hibernate.annotations.Any;
import org.springframework.lang.Nullable;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String day;
    private int centerId;
    private int utilisateurId;
    private int doctorId;
    private boolean available;

    public Appointment(int id, String day, int centerId, int utilisateurId, int doctorId, boolean available) {
        this.id = id;
        this.day = day;
        this.centerId = centerId;
        this.utilisateurId = utilisateurId;
        this.doctorId = doctorId;
        this.available = available;
    }
    public Appointment() {
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDay() {
        return day;
    }
    public void setDay(String day) {
        this.day = day;
    }
    public int getCenterId() {
        return centerId;
    }
    public void setCenterId(int centerId) {
        this.centerId = centerId;
    }
    public int getUtilisateurId() {
        return utilisateurId;
    }
    public void setUtilisateurId(int utilisateurId) {
        this.utilisateurId = utilisateurId;
    }
    public int getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }
    public boolean isAvailable() {
        return available;
    }
    public void setAvailable(boolean available) {
        this.available = available;
    }
    
    
}
