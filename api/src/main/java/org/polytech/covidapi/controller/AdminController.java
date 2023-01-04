package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Utilisateur;
import org.polytech.covidapi.service.UtilisateurService;
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
    private UtilisateurService userService;
    @GetMapping("/showadminpretty")
    public String findUsers (Model model) {

        List<Utilisateur> users = userService.findAll();
        StringBuilder str = new StringBuilder();
        for (Utilisateur currentuser : users) {
            str.append("\n").append(currentuser);
        }

        return str.toString();
    }

    @GetMapping(value="/showadmin")
    public ResponseEntity<List<Utilisateur>> getAllUser(){
        List<Utilisateur> admins = userService.findadmin();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }


    @GetMapping(value="/max")
    public int max(){
        return userService.max();
    }
    

    @GetMapping("/showadmin/{id}")
    public Optional<Utilisateur> getOneadmin(@PathVariable int id){
        return userService.findById(id);
    }

    /*@GetMapping("/showcenteradmin/{id}")
    public Utilisateur getOnecenteradmin(@PathVariable int id){
            return  userService.findById(id).getCenter();
    }*/

    @PostMapping(path = "/addadmin")
    public Utilisateur save(@RequestBody Utilisateur newuser) {
        return userService.save(newuser);
    }

    @DeleteMapping("/deleteadmin/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }

    @GetMapping("/showadminbycenter/{id}")
    public List<Utilisateur> getUserByCenterAndRole(@PathVariable int id){
        return userService.getUserByCenterAndRole("Admin",id);
    }
}