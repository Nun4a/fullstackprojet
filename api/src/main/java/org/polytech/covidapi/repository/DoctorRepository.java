package org.polytech.covidapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
    
}
