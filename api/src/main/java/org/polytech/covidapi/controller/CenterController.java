package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Center;
import org.polytech.covidapi.service.CenterService;
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
public class CenterController {
    
    @Autowired
    private CenterService centerService;
    @GetMapping("/showcenterpretty")
    public String findUsers (Model model) {

        List<Center> centers = centerService.findAll();
        String str = "";
        for (int i=0; i<centers.size(); i++){
            Center currentcenter = centers.get(i);
            str = str + "\n" + currentcenter;
        }

        return str;
    }

    @GetMapping(value="/showcenter")
    public Iterable<Center> getAllUser(){
        Iterable<Center> adminCollections = centerService.findAll();
        return adminCollections;
    }

    @GetMapping("/showcenter/{id}")
    public Optional<Center> getOneacteur(@PathVariable int id){
            Optional<Center> center = centerService.findById(id);
            return center;
    }

    @PostMapping(path = "/addcenter")
    public Center save(@RequestBody Center newuser) {
        return centerService.save(newuser);
    }

    @DeleteMapping("/deletecenter/{id}")
    public void delete(@PathVariable int id){
        centerService.delete(id);
    }


}