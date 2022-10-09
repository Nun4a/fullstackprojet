package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Admin;
import org.polytech.covidapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins="http://localhost:5432/")
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
    public Iterable<Admin> getAllUser(){
        Iterable<Admin> adminCollections = userService.findAll();
        return adminCollections;
    }

    @GetMapping("/showadmin/{id}")
    public Optional<Admin> getOneacteur(@PathVariable int id){
            Optional<Admin> user = userService.findById(id);
            return user;
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