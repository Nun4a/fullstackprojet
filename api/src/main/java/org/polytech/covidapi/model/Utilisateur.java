package org.polytech.covidapi.model;

import javax.persistence.*;

@Entity(name = "utilisateur")
@Table(name = "utilisateur")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String password;
    private String mail;
    private String role;
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_center")
    private Center center;



    public Utilisateur (){
        
    }

    public Utilisateur(int id, String firstName, String lastName, String password, String mail, String role, Center center) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.mail = mail;
        this.center = center;
        this.role = role;
    }

    

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Center getCenter() {
        return center;
    }

    public void setCenter(Center center) {
        this.center = center;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Utilisateur [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", password="
                + password + ", mail=" + mail + ", role=" + role + ", center=" + center + "]";
    }

    




   
}
