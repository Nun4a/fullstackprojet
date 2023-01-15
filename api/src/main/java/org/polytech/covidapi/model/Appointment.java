package org.polytech.covidapi.model;

import javax.persistence.*;

import org.springframework.lang.Nullable;


@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String day;
    private int centerId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "utilisateur")
    @Nullable
    private Utilisateur utilisateur;
    private int doctorId;
    
    public Appointment(int id, String day, int centerId, Utilisateur utilisateur, int doctorId) {
        this.id = id;
        this.day = day;
        this.centerId = centerId;
        this.utilisateur = utilisateur;
        this.doctorId = doctorId;
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


    public Utilisateur getUtilisateur() {
        return utilisateur;
    }


    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }


    public int getDoctorId() {
        return doctorId;
    }


    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public Appointment() {
    }
    
    
    
}
