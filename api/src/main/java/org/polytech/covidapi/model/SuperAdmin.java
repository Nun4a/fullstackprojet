package org.polytech.covidapi.model;

import javax.persistence.Entity;

@Entity
//@DiscriminatorValue("1")
public class SuperAdmin extends User{

    @Override
    public String toString() {
        return super.toString();
    }
    
}
