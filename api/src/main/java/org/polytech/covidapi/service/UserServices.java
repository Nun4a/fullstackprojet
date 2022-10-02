package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.model.User;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices implements IUserServices {

    @Autowired
    private UserRepository repository;

    @Override
    public List<User> findAll() {

        var users = (List<User>) repository.findAll();

        return users;
    }
}