package org.polytech.covidapi;

import org.polytech.covidapi.Entity.Users;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CovidApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CovidApiApplication.class, args);
	}

	@Bean

    CommandLineRunner runner(UserRepository userRep) {

        return args -> {
            userRep.save(new Users(1, "Bapt", "Porcu", "b@o.com", "06", "Nancy", true));
		};
	}

}
