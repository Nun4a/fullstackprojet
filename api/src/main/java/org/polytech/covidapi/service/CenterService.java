package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Address;
import org.polytech.covidapi.model.Center;
import org.polytech.covidapi.repository.CenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CenterService {

    @Autowired
    private CenterRepository repository;

    
    public List<Center> findAll() {
        return (List<Center>) repository.findAll();
    }
    
    public Center save(Center center){
        return repository.save(center);
    }

     
    public Optional<Center> findById(int id){
        return repository.findById(id);
    }

    public void delete(int id_center){
        repository.deleteById(id_center);
    }
    public void updateCenter(String name, int capacity, String timetable, int centerId, Address address){
        this.repository.updateCenter(name, capacity, timetable, centerId, address);
    }
}