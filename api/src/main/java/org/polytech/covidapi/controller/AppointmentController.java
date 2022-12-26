package org.polytech.covidapi.controller;

import java.time.Duration;
import java.util.Optional;

import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.bucket4j.Bucket;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;

    private Bucket bucket;

    public AppointmentController(AppointmentService appointmentService, Bucket bucket) {
        this.appointmentService = appointmentService;
        this.bucket = bucket;
    }

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
        else {
            throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Trop de requêtes");
        }
    }

    @DeleteMapping("/appointment/{id}")
    public void delete(@PathVariable int id){
        appointmentService.delete(id);
    }
}
