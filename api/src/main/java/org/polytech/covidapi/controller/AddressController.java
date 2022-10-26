package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;
import org.polytech.covidapi.model.Address;
import org.polytech.covidapi.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/api")
public class AddressController {
    
    @Autowired
    private AddressService addressService;

    @GetMapping("/showaddresspretty")

    public String findUsers (Model model) {

        List<Address> address = addressService.findAll();
        String str = "";
        for (int i=0; i<address.size(); i++){
            Address currentaddress = address.get(i);
            str = str + "\n" + currentaddress;
        }

        return str;
    }

    @GetMapping(value="/showaddress")
    public Iterable<Address> getAllUser(){
        Iterable<Address> addressCollections = addressService.findAll();
        return addressCollections;
    }

    @GetMapping("/showaddress/{id}")
    public Optional<Address> getOneacteur(@PathVariable int id){
            return addressService.findById(id);
    }

    @PostMapping(path = "/address")
    public Address save(@RequestBody Address newaddress) {
        return addressService.save(newaddress);
    }

    @DeleteMapping("/address/{id}")
    public void delete(@PathVariable int id){
        addressService.delete(id);
    }


}
