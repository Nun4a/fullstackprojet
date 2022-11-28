package org.polytech.covidapi.controller;

import java.util.Optional;

import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.bucket4j.Bucket;



@RestController
@RequestMapping("/api")
public class AppointmentController {
    
    private AppointmentService appointmentService;
    private final Bucket bucket;

    @Autowired
    public AppointmentController(AppointmentService appointmentService, Bucket bucket) {
        this.appointmentService = appointmentService;
        this.bucket = bucket;
    }

    //rajoute 10 tokens toutes les minutes
    //Refill refill = Refill.intervally(10, Duration.ofMinutes(1));
    //capacité max de 10 token
    //Bandwidth limit = Bandwidth.classic(10, refill);
    //Bucket bucket = Bucket.builder().addLimit(limit).build();

    @GetMapping(value="/appointments")
    public Iterable<Appointment> getAllAppointment(){
        Iterable<Appointment> appointmentCollections = appointmentService.findAll();
        return appointmentCollections;
    }

    @GetMapping("/appointment/{id}")
    public Optional<Appointment> getOneacteur(@PathVariable int id){
            return appointmentService.findById(id);
    }

    @PostMapping(path = "/appointment")
    public Appointment save(@RequestBody Appointment newappointment) {
        if(bucket.tryConsume(1)) {
            return appointmentService.save(newappointment);
            }
            return null;
    }

    @DeleteMapping("/appointment/{id}")
    public void delete(@PathVariable int id){
        appointmentService.delete(id);
    }
}
