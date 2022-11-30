package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.PatientDto;
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
public class PatientController {
    
    @Autowired
    private UtilisateurService patientService;
    @GetMapping("/showpatientpretty")
    public String findUsers (Model model) {

        List<PatientDto> users = patientService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<users.size(); i++){
            PatientDto currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showpatient")
    public Iterable<PatientDto> getAllUser(){
        Iterable<PatientDto> adminCollections = patientService.findAll().stream().map(this::mapEntity).toList();
        return adminCollections;
    }

    @GetMapping("/patient/{id}")
    public Optional<PatientDto> getOnePatient(@PathVariable int id){
            Optional<PatientDto> user = patientService.findById(id).map(this::mapEntity);
            return user;
    }

    @PostMapping(path = "/patient")
    public PatientDto save(@RequestBody PatientDto newuser) {
        return mapEntity(patientService.save(mapDto(newuser)));
    }

    @DeleteMapping("/patient/{id}")
    public void delete(@PathVariable int id){
        patientService.delete(id);
    }

    private PatientDto mapEntity(Utilisateur save) {
        return new PatientDto();
    }

    private Utilisateur mapDto(PatientDto newPatient) {
        return new Utilisateur();
    }
}
