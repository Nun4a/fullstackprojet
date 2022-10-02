package org.polytech.covidapi.controller;

import java.util.List;

import org.polytech.covidapi.model.User;
import org.polytech.covidapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:5432/")
@RequestMapping("/api")
public class RESTController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/showusers")
    public String findUsers (Model model) {

        var users = (List<User>) userService.findAll();

        model.addAttribute("users", users);

        return "showusers";
    }
}
