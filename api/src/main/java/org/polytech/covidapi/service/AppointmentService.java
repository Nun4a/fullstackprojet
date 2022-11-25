package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repository;

    
    public List<Appointment> findAll() {
        var appointment = (List<Appointment>) repository.findAll();
        return appointment;
    }
    
    public Appointment save(Appointment Appointment){
        return repository.save(Appointment);
    }

    public Optional<Appointment> findById(int id){
        return repository.findById(id);
    }

    public void delete(int id_appointment){
        repository.deleteById(id_appointment);
    }
}