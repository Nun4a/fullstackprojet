package org.polytech.covidapi.services;

import java.util.List;

import org.polytech.covidapi.Entity.Users;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices implements IUserServices {

    @Autowired
    private UserRepository repository;

    @Override
    public List<Users> findAll() {

        var users = (List<Users>) repository.findAll();

        return users;
    }
}