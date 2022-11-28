package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.AdminDto;
import org.polytech.covidapi.controller.domain.CenterDto;
import org.polytech.covidapi.model.Admin;
import org.polytech.covidapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/private")
public class AdminController {
    
    @Autowired
    private AdminService userService;
    @GetMapping("/showadminpretty")
    public String findUsers (Model model) {

        List<AdminDto> users = userService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<users.size(); i++){
            AdminDto currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showadmin")
    public ResponseEntity<List<AdminDto>> getAllUser(){
        List<AdminDto> admins = userService.findAll().stream().map(this::mapEntity).toList();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }



    

    @GetMapping("/showadmin/{id}")
    public Optional<AdminDto> getOneadmin(@PathVariable int id){
            Optional<AdminDto> user = userService.findById(id).map(this::mapEntity);
            return user;
    }

    @GetMapping("/showcenteradmin/{id}")
    public CenterDto getOnecenteradmin(@PathVariable int id){
            return  userService.findById(id).map(this::mapEntity).get().getCenter();
    }

    @PostMapping(path = "/addadmin")
    public AdminDto save(@RequestBody AdminDto newuser) {
        return mapEntity(userService.save(mapDto(newuser)));
    }

    @DeleteMapping("/deleteadmin/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }

    private AdminDto mapEntity(Admin save) {
        return new AdminDto();
    }

    private Admin mapDto(AdminDto newDoctor) {
        return new Admin();
    }


}