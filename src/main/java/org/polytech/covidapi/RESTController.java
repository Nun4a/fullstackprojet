package org.polytech.covidapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
    @GetMapping("/test")
    public Users test(@RequestParam(value = "fname", defaultValue = "Hi")String name) {
        return new Users(1, "Bapt", "Porcu", "b@o.com", "06", "Nancy", true);
    }
}
