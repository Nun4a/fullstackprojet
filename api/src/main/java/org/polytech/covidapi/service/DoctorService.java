package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;
import org.polytech.covidapi.model.Doctor;
import org.polytech.covidapi.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    
    public List<Doctor> findAll() {

        var doctors = (List<Doctor>) doctorRepository.findAll();

        return doctors;
    }
    
    public Doctor save(Doctor doctors){
        return doctorRepository.save(doctors);
    }

     
    public Optional<Doctor> findById(int id){
        return doctorRepository.findById(id);
    }

    
    public void delete(int id_user){
        doctorRepository.deleteById(id_user);
    }
}