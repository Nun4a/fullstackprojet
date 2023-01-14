package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;
import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import io.github.bucket4j.*;
import org.springframework.web.server.ResponseStatusException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import io.github.bucket4j.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;

    private Bucket bucket;

    final String remainning = "X-Rate-Limit-Remaining";
    final String retryAfter = "X-Rate-Limit-Retry-After-Seconds";

    public AppointmentController(AppointmentService appointmentService, Bucket bucket) {
        this.appointmentService = appointmentService;
        this.bucket = bucket;
    }

     @GetMapping(value="/public/appointments")
     public Iterable<Appointment> getAllAppointment(){
         if(bucket.tryConsume(1)) {
             return (Iterable<Appointment>) appointmentService.findAll();
         }
         else {
             throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Trop de requêtes");
         }
    }

    @CrossOrigin(exposedHeaders = {remainning, retryAfter})
    @GetMapping(value = "/appointments/infos")
    public ResponseEntity<Object> infos() {
        HttpHeaders headers = new HttpHeaders();
        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(2);

        if(probe.isConsumed()) {
            headers.add("X-Rate-Limit-Remaining", Long.toString(probe.getRemainingTokens()));
            return ResponseEntity.ok()
                    .headers(headers)
                    .build();
        }

        long waitingTimeSec = probe.getNanosToWaitForRefill() / 1_000_000_000;
        headers.add("X-Rate-Limit-Retry-After-Seconds",String.valueOf(waitingTimeSec));
        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                .headers(headers)
                .build();
    }

    @GetMapping("/public/appointment/{id}")
    public Optional<Appointment> getOneacteur(@PathVariable int id){
        return appointmentService.findById(id);
    }

    @PostMapping(path = "/public/appointment")
    public Appointment save(@RequestBody Appointment newappointment) {
        return appointmentService.save(newappointment);
    }

    @GetMapping("/public/appointmentbycenter/{id}")
    public List<Appointment> getAppoitementsbyCenter(@PathVariable int id){
         return appointmentService.getAppointementByCenterId(id);
    }

    @DeleteMapping("/private/appointment/{id}")

    public void delete(@PathVariable int id){
        appointmentService.delete(id);
    }
}
