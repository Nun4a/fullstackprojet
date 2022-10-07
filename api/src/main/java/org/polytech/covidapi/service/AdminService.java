package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Admin;
import org.polytech.covidapi.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repository;

    
    public List<Admin> findAll() {

        var users = (List<Admin>) repository.findAll();

        return users;
    }
    
    public Admin save(Admin users){
        return repository.save(users);
    }

     
    public Optional<Admin> findById(int id){
        return repository.findById(id);
    }

    
    public void delete(int id_user){
        repository.deleteById(id_user);
    }
}