package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.CenterDto;
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

        List<CenterDto> centers = centerService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<centers.size(); i++){
            CenterDto currentcenter = centers.get(i);
            str = str + "\n" + currentcenter;
        }

        return str;
    }

    @GetMapping(value="/showcenter")
    public Iterable<CenterDto> getAllUser(){
        Iterable<CenterDto> adminCollections = centerService.findAll().stream().map(this::mapEntity).toList();
        return adminCollections;
    }

    @GetMapping("/showcenter/{id}")
    public Optional<CenterDto> getOneacteur(@PathVariable int id){
            Optional<CenterDto> center = centerService.findById(id).map(this::mapEntity);
            return center;
    }

    @PostMapping(path = "/addcenter")
    public CenterDto save(@RequestBody CenterDto newuser) {
        return mapEntity(centerService.save(mapDto(newuser)));
    }

    @DeleteMapping("/deletecenter/{id}")
    public void delete(@PathVariable int id){
        centerService.delete(id);
    }

    private CenterDto mapEntity(Center save) {
        return new CenterDto();
    }

    private Center mapDto(CenterDto newDoctor) {
        return new Center();
    }


}