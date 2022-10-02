package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Patient;
import org.polytech.covidapi.services.PatientServices;
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
public class PatientController {
    
    @Autowired
    private PatientServices userService;
    @GetMapping("/showpatient")
    public String findUsers (Model model) {

        List<Patient> users = userService.findAll();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Patient currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping("/showpatient/{id}")
    public Optional<Patient> getOneacteur(@PathVariable int id){
            Optional<Patient> user = userService.findById(id);
            return user;
    }

    @PostMapping(path = "/addpatient")
    public Patient save(@RequestBody Patient newuser) {
        return userService.save(newuser);
    }

    @DeleteMapping("/deletepatient/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }


}
