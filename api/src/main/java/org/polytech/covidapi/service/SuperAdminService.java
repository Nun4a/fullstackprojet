package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;
import org.polytech.covidapi.model.SuperAdmin;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperAdminService {

    @Autowired
    private SuperAdminRepository repository;

    
    public List<SuperAdmin> findAll() {

        var users = (List<SuperAdmin>) repository.findAll();

        return users;
    }
    
    public SuperAdmin save(SuperAdmin users){
        return repository.save(users);
    }

     
    public Optional<SuperAdmin> findById(int id){
        return repository.findById(id);
    }

    
    public void delete(int id_user){
        repository.deleteById(id_user);
    }
}