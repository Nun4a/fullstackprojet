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
    private DoctorService doctorService;
    
    @GetMapping("/doctors")
    public String getDoctors (Model model) {

        List<Doctor> doctors = doctorService.findAll();
        String str = "";
        for (int i=0; i<doctors.size(); i++){
            Doctor currentuser = doctors.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping("/doctor/{id}")
    public Optional<Doctor> getOneDoctor(@PathVariable int id){
            Optional<Doctor> doctor = doctorService.findById(id);
            return doctor;
    }

    @PostMapping(path = "/doctor")
    public Doctor save(@RequestBody Doctor newDoctor) {
        return doctorService.save(newDoctor);
    }

    @DeleteMapping("/doctor/{id}")
    public void delete(@PathVariable int id){
        doctorService.delete(id);
    }


}