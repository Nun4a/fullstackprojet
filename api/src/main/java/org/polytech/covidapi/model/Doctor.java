package org.polytech.covidapi.model;

import javax.persistence.Entity;

@Entity
//@DiscriminatorValue("3")
public class Doctor extends User{

    @Override
    public String toString() {
        return super.toString();
    }
    
}
