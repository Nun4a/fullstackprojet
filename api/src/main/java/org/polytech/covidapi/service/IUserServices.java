package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.model.Users;

public interface IUserServices {

    List<Users> findAll();
}