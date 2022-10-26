package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Patient;
import org.polytech.covidapi.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository repository;

    
    public List<Patient> findAll() {

        var users = (List<Patient>) repository.findAll();

        return users;
    }
    
    public Patient save(Patient users){
        return repository.save(users);
    }

    public Optional<Patient> findById(int id){
        return repository.findById(id);
    }
    
    public void delete(int id_user){
        repository.deleteById(id_user);
    }
}