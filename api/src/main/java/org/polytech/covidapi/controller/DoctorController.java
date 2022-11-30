package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.DoctorDto;
import org.polytech.covidapi.model.Utilisateur;
import org.polytech.covidapi.service.UtilisateurService;
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
public class DoctorController {
    
    @Autowired
    private UtilisateurService userService;
    @GetMapping("/showdoctorpretty")
    public String findUsers (Model model) {

        List<DoctorDto> doctors = userService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<doctors.size(); i++){
            DoctorDto currentuser = doctors.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showdoctor")
    public Iterable<DoctorDto> getAllUser(){
        Iterable<DoctorDto> doctorCollections = userService.findAll().stream().map(this::mapEntity).toList();
        return doctorCollections;
    }

    @GetMapping("/showdoctor/{id}")
    public Optional<DoctorDto> getOneacteur(@PathVariable int id){
            Optional<DoctorDto> user = userService.findById(id).map(this::mapEntity);
            return user;
    }

    @PostMapping(path = "/doctor")
    public DoctorDto save(@RequestBody DoctorDto newDoctor) {
        return mapEntity(userService.save(mapDto(newDoctor)));
    }

    @DeleteMapping("/doctor/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }

    private DoctorDto mapEntity(Utilisateur save) {
        return new DoctorDto();
    }

    private Utilisateur mapDto(DoctorDto newDoctor) {
        return new Utilisateur();
    }



}