package org.polytech.covidapi.controller.domain;




public class CenterDto {

    private int id;
    private String name;
    private int capacity;
    private String timetable;
    private AddressDto address;

    public CenterDto(int id, String name, int capacity, String timetable, AddressDto address) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.timetable = timetable;
        this.address = address;
    }

    
    

    public CenterDto() {
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



    public AddressDto getAddress() {
        return address;
    }




    public void setAddress(AddressDto address) {
        this.address = address;
    }




    @Override
    public String toString() {
        return "Center [id=" + id + ", name=" + name + ", capacity=" + capacity + ", timetable=" + timetable
                + ", address=" + address + "]";
    }

}
