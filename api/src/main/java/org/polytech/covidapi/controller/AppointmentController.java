package org.polytech.covidapi.controller;

import org.polytech.covidapi.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

import org.polytech.covidapi.service.AppointmentService;

@RestController
@RequestMapping("/api")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

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
        return appointmentService.save(newappointment);
    }

    @DeleteMapping("/appointment/{id}")
    public void delete(@PathVariable int id){
        appointmentService.delete(id);
    }
}
