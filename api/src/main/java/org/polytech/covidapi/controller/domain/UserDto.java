package org.polytech.covidapi.controller.domain;



public class UserDto {

    private int id;

    private String firstName;

    private String lastName;
    private String mail;
    private String phoneNumber;
    private AddressDto address;

    public UserDto (){
        
    }

    public UserDto (int id, String firstName, String lastName, String mail, String phoneNumber){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
    }


    public int getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    @Override
    public String toString() {
        return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", mail=" + mail
                + ", phoneNumber=" + phoneNumber + ", address=" + address + "]";
    }

   
}
