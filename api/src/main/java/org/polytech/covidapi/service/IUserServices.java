package org.polytech.covidapi.service;

import java.util.List;

import org.polytech.covidapi.model.User;

public interface IUserServices {

    List<User> findAll();
}