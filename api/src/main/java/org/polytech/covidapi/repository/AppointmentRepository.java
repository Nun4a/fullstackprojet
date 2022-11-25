package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    
}
