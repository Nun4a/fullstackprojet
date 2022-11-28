package org.polytech.covidapi.model;

import javax.persistence.Entity;

@Entity
//@DiscriminatorValue("4")
public class Patient extends User{
    private boolean vaccinated;


    public boolean isVaccinated() {
        return this.vaccinated;
    }

    public void setVaccinated(boolean vaccinated) {
        this.vaccinated = vaccinated;
    }

    @Override
    public String toString() {
        return super.toString() + "vaccinated=" + vaccinated;
    }

    
}


