package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Address;
import org.polytech.covidapi.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository repository;

    
    public List<Address> findAll() {

        var users = (List<Address>) repository.findAll();

        return users;
    }
    
    public Address save(Address address){
        return repository.save(address);
    }

     
    public Optional<Address> findById(int id){
        return repository.findById(id);
    }

    
    public void delete(int id_user){
        repository.deleteById(id_user);
    }
}