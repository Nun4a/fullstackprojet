package org.polytech.covidapi.controler;

import java.util.List;

import org.polytech.covidapi.Entity.Users;
import org.polytech.covidapi.services.IUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:5432/")
@RequestMapping("/api")
public class RESTController {
    
    @Autowired
    private IUserServices userService;
    @GetMapping("/showusers")
    public String findUsers (Model model) {

        List<Users> users = userService.findAll();
        String str = "";
        for (int i=0; i<users.size(); i++){
            Users currentuser = users.get(i);
            str = str + "\n" + currentuser;
        }

        //model.addAttribute("users", users);

        return str;
    }

    @PostMapping(path = "/users")
    public Users save(@RequestBody Users newuser) {
        return userService.save(newuser);
    }
}
