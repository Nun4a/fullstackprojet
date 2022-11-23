package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
//@Table(name = "admins")
//@DiscriminatorValue("2")
public class Admin extends User {

    @OneToOne
    @JoinColumn(name = "id_center")
    private Center center;

    

    

    public Admin(int id, String firstName, String lastName, String mail, String phoneNumber, Center center) {
        super(id, firstName, lastName, mail, phoneNumber);
        this.center = center;
    }

    



    public Admin() {
    }





    @Override
    public String toString() {
        return super.toString();
    }



    public Center getCenter() {
        return center;
    }



    public void setCenter(Center center) {
        this.center = center;
    }

}
