package org.polytech.covidapi.services;

import java.util.List;

import org.polytech.covidapi.Entity.Users;

public interface IUserServices {

    List<Users> findAll();
    Users save(Users users);
}