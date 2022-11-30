package org.polytech.covidapi.controller.domain;





public class AdminDto extends UserDto {


    private CenterDto center;

    

    

    public AdminDto(int id, String firstName, String lastName, String mail, String phoneNumber, CenterDto center) {
        super(id, firstName, lastName, mail, phoneNumber);
        this.center = center;
    }

    



    public AdminDto() {
    }





    @Override
    public String toString() {
        return super.toString();
    }



    public CenterDto getCenter() {
        return center;
    }



    public void setCenter(CenterDto center) {
        this.center = center;
    }

}
