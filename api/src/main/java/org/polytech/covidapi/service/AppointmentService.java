package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Appointment;
import org.polytech.covidapi.model.Center;
import org.polytech.covidapi.repository.AppointmentRepository;
import org.polytech.covidapi.repository.CenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> findAll() {
        return (List<Appointment>) appointmentRepository.findAll();
    }
    
    public Appointment save(Appointment Appointment){
        return appointmentRepository.save(Appointment);
    }

    public Optional<Appointment> findById(int id){
        return appointmentRepository.findById(id);
    }

    public List<Appointment> getAppointementByCenterId(int id){
        return appointmentRepository.findByCenterId(id);
    }
    public void delete(int id_appointment){
        appointmentRepository.deleteById(id_appointment);
    }

    public int max(){

        return appointmentRepository.findMaxId();

    }
}

