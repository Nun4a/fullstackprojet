package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Admin;
import org.polytech.covidapi.model.Center;
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
@RequestMapping("/api")
public class AdminController {
    
    @Autowired
    private AdminService userService;
    @GetMapping("/showadminpretty")
    public String findUsers (Model model) {

        List<Admin> users = userService.findAll();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Admin currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showadmin")
    public ResponseEntity<List<Admin>> getAllUser(){
        List<Admin> admins = userService.findAll();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }
    

    @GetMapping("/showadmin/{id}")
    public Optional<Admin> getOneadmin(@PathVariable int id){
            Optional<Admin> user = userService.findById(id);
            return user;
    }

    @GetMapping("/showcenteradmin/{id}")
    public Center getOnecenteradmin(@PathVariable int id){
            return  userService.findById(id).get().getCenter();
    }

    @PostMapping(path = "/addadmin")
    public Admin save(@RequestBody Admin newuser) {
        return userService.save(newuser);
    }

    @DeleteMapping("/deleteadmin/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }


}