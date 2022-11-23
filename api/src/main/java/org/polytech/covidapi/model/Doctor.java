package org.polytech.covidapi.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.ForeignKey;

@Entity
public class Doctor extends User{

    @OneToOne(cascade = {})
    @JoinColumn(name = "id_center", 
        foreignKey = @ForeignKey(name = "doctor_id_center_fk"), nullable = true)
    private Center center;

    @Override
    public String toString() {
        return super.toString();
    }
    
}
