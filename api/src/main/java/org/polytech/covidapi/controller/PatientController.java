package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Patient;
import org.polytech.covidapi.service.PatientService;
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
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/api")
public class PatientController {
    
    @Autowired
    private PatientService patientService;
    @GetMapping("/showpatientpretty")
    public String findUsers (Model model) {

        List<Patient> users = patientService.findAll();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Patient currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showpatient")
    public Iterable<Patient> getAllUser(){
        Iterable<Patient> adminCollections = patientService.findAll();
        return adminCollections;
    }

    @GetMapping("/patient/{id}")
    public Optional<Patient> getOnePatient(@PathVariable int id){
            Optional<Patient> user = patientService.findById(id);
            return user;
    }

    @PostMapping(path = "/patient")
    public Patient save(@RequestBody Patient newuser) {
        return patientService.save(newuser);
    }

    @DeleteMapping("/patient/{id}")
    public void delete(@PathVariable int id){
        patientService.delete(id);
    }

    /*@GetMapping(path = "/patient/{id}/address")
    public Address getOnePatientAddress(
        @PathVariable Integer id) {
        return  patientService.findById(id).get().getAddress();
    }*/
}
