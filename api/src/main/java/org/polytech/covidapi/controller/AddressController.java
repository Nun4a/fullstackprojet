package org.polytech.covidapi.controller;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.controller.domain.AddressDto;
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

        List<AddressDto> address = addressService.findAll().stream().map(this::mapEntity).toList();
        String str = "";
        for (int i=0; i<address.size(); i++){
            AddressDto currentaddress = address.get(i);
            str = str + "\n" + currentaddress;
        }

        return str;
    }

    @GetMapping(value="/showaddress")
    public Iterable<AddressDto> getAllUser(){
        Iterable<AddressDto> addressCollections = addressService.findAll().stream().map(this::mapEntity).toList();
        return addressCollections;
    }

    @GetMapping("/showaddress/{id}")
    public Optional<AddressDto> getOneacteur(@PathVariable int id){
            return addressService.findById(id).map(this::mapEntity);
    }

    @PostMapping(path = "/address")
    public AddressDto save(@RequestBody AddressDto newaddress) {
        return mapEntity(addressService.save(mapDto(newaddress)));
    }

    @DeleteMapping("/address/{id}")
    public void delete(@PathVariable int id){
        addressService.delete(id);
    }

    private AddressDto mapEntity(Address save) {
        return new AddressDto();
    }

    private Address mapDto(AddressDto newDoctor) {
        return new Address();
    }


}
