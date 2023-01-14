package org.polytech.covidapi.model;

import javax.persistence.*;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String day;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_center")
    private Center center;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_utilisateur")
    private Utilisateur utilisateur;

    private boolean available;
    
    public Appointment(String day, Center center, Utilisateur utilisateur, boolean available){
        this.day = day;
        this.center = center;
        this.utilisateur = utilisateur;
        this.available = available;

    }

    public Appointment(){
        
    }
    
    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public int getCenterId(){
        return center.getId();
    }

    public Center getCenter() {
        return center;
    }

    public void setCenter(Center center) {
        this.center = center;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
