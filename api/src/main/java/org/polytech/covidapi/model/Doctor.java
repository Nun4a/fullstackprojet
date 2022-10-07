package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
//@DiscriminatorValue("3")
public class Doctor extends User{

    @OneToOne
    @JoinColumn(name = "center_id", referencedColumnName = "id")
    private Center center;

    @Override
    public String toString() {
        return super.toString();
    }
    
}
