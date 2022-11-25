package org.polytech.covidapi.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.ForeignKey;

@Entity
//@Table(name = "centers")
public class Center {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int capacity;
    private String timetable;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_address")
    private Address address;

    public Center(int id, String name, int capacity, String timetable, Address address) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.timetable = timetable;
        this.address = address;
    }

    
    

    public Center() {
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



    public Address getAddress() {
        return address;
    }




    public void setAddress(Address address) {
        this.address = address;
    }




    @Override
    public String toString() {
        return "Center [id=" + id + ", name=" + name + ", capacity=" + capacity + ", timetable=" + timetable
                + ", address=" + address + "]";
    }

}
