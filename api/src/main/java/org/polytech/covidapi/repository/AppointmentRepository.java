package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    //@Query(value="select * from Appointment a where a.center_id = :id", nativeQuery=true)
    List<Appointment> findByCenterId(int id);
}
