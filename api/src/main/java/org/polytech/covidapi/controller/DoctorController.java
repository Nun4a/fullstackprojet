package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;
import org.polytech.covidapi.model.Doctor;
import org.polytech.covidapi.service.DoctorService;
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
public class DoctorController {
    
    @Autowired
    private DoctorService userService;
    @GetMapping("/showdoctor")
    public String findUsers (Model model) {

        List<Doctor> users = userService.findAll();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Doctor currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping("/showdoctor/{id}")
    public Optional<Doctor> getOneacteur(@PathVariable int id){
            Optional<Doctor> user = userService.findById(id);
            return user;
    }

    @PostMapping(path = "/adddoctor")
    public Doctor save(@RequestBody Doctor newuser) {
        return userService.save(newuser);
    }

    @DeleteMapping("/deletedoctor/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }


}