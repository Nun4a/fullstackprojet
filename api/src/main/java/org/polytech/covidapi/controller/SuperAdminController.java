package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.SuperAdminDto;
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
    @GetMapping("/showsuperadminpretty")
    public String findUsers (Model model) {

        List<SuperAdminDto> users = userService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<users.size(); i++){
            SuperAdminDto currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        return str;
    }

    @GetMapping(value="/showsuperadmin")
    public ResponseEntity<List<SuperAdminDto>> getAllUser(){
        List<SuperAdminDto> admins = userService.findAll().stream().map(this::mapEntity).toList();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping("/showsuperadmin/{id}")
    public Optional<SuperAdminDto> getOneacteur(@PathVariable int id){
            Optional<SuperAdminDto> user = userService.findById(id).map(this::mapEntity);
            return user;
    }

    @PostMapping(path = "/addsuperadmin")
    public SuperAdminDto save(@RequestBody SuperAdminDto newuser) {
        return mapEntity(userService.save(mapDto(newuser)));
    }

    @DeleteMapping("/deletesuperadmin/{id}")
    public void delete(@PathVariable int id){
        userService.delete(id);
    }

    private SuperAdminDto mapEntity(Utilisateur save) {
        SuperAdminDto superAdmin  = new SuperAdminDto();
        if (save.getRole()=="SuperAdmin"){
            superAdmin.setId(save.getId());
            superAdmin.setFirstName(save.getFirstName());
            superAdmin.setLastName(save.getLastName());
            superAdmin.setMail(save.getMail());
            superAdmin.setPhoneNumber(" ");
        }
        return superAdmin;
    }

    private Utilisateur mapDto(SuperAdminDto newSuperAdmin) {
        Utilisateur user = new Utilisateur();
        user.setId(newSuperAdmin.getId());
        user.setRole("SuperAdmin");
        user.setCenter(null);
        user.setFirstName(newSuperAdmin.getFirstName());
        user.setLastName(newSuperAdmin.getLastName());
        user.setMail(newSuperAdmin.getMail());
        user.setPassword(null);
        return user;

    }


}