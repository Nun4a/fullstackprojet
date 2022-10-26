package org.polytech.covidapi.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

@Entity
//@Table(name = "centers")
public class Center {
    
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private int capacity;
    private String timetable;
    private String address;

    public Center(int id, String name, int capacity, String timetable, String address) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.timetable = timetable;
        this.address = address;
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

    

    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    @Override
    public String toString() {
        return "Center [id=" + id + ", name=" + name + ", capacity=" + capacity + ", timetable=" + timetable
                + ", address=" + address + "]";
    }

}
