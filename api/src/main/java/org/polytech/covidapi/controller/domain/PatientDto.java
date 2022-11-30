package org.polytech.covidapi.controller.domain;




public class PatientDto extends UserDto{

    private int id;
    private String firstName;
    private String lastName;
    private String mail;
    private String phoneNumber;
    
    private AddressDto address; 

    private boolean vaccinated;


    public PatientDto(int id, String firstName, String lastName, String mail, String phoneNumber, AddressDto address,
            boolean vaccinated) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.vaccinated = vaccinated;
    }

    



    public PatientDto() {
    }





    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public AddressDto getAddress() {
        return address;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }

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


