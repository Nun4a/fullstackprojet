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
public class SuperAdminController {
    
    @Autowired
    private UtilisateurService userService;
    @GetMapping("/private/superadmin/showsuperadminpretty")
    public String findUsers (Model model) {

        List<Utilisateur> users = userService.findsuperadmin();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Utilisateur currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/private/superadmin/showsuperadmin")
    public ResponseEntity<List<Utilisateur>> getAllUser(){
        List<Utilisateur> admins = userService.findsuperadmin();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }


    @GetMapping("/private/superadmin/showsuperadmin/{id}")
    public Optional<Utilisateur> getOneadmin(@PathVariable int id){
            Optional<Utilisateur> user = userService.findById(id);
            return user;
    }

    /*@GetMapping("/showcenteradmin/{id}")
    public Utilisateur getOnecenteradmin(@PathVariable int id){
            return  userService.findById(id).getCenter();
    }*/

    @PostMapping(path = "/private/superadmin/addsuperadmin")
    public Utilisateur save(@RequestBody Utilisateur newuser) {
        return userService.save(newuser);
    }

    @DeleteMapping("/private/superadmin/deletesuperadmin/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }


}