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
    private DoctorRepository repository;

    
    public List<Doctor> findAll() {

        var users = (List<Doctor>) repository.findAll();

        return users;
    }
    
    public Doctor save(Doctor users){
        return repository.save(users);
    }

     
    public Optional<Doctor> findById(int id){
        return repository.findById(id);
    }

    
    public void delete(int id_user){
        repository.deleteById(id_user);
    }
}