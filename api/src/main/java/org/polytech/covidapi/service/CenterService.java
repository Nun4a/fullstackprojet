package org.polytech.covidapi.service;

import java.time.LocalDate;
import java.util.List;

import org.polytech.covidapi.repository.CenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import org.polytech.covidapi.model.Center;

@Service
@Scope("singleton")
public class CenterService {
    
    @Autowired
    private CenterRepository centerRepository;

    public Center save(Center center){
        return centerRepository.save(center);
    }
}
