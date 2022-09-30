package org.polytech.covidapi.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "centers")
public class Center {
    
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private Address address;
    private int capacity;
    private String timetable;


    public Center(int id, String name, Address address, int capacity, String timetable) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.capacity = capacity;
        this.timetable = timetable;
    }
    

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return this.address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public int getCapacity() {
        return this.capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getTimetable() {
        return this.timetable;
    }

    public void setTimetable(String timetable) {
        this.timetable = timetable;
    }

}
