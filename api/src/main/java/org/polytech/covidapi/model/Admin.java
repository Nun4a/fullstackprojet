package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
//@Table(name = "admins")
//@DiscriminatorValue("2")
public class Admin extends User {

    @OneToOne
    @JoinColumn(name = "center_id")
    private Center center;

    @Override
    public String toString() {
        return super.toString();
    }

}
