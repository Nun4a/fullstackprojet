package org.polytech.covidapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class CovidApiApplication implements CommandLineRunner{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	public static void main(String[] args) {
		SpringApplication.run(CovidApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		String sql = "INSERT INTO users (fname, lname, mail, telephone, center_city, vaccinate) VALUES ('toto', 'tata', 'titi','1234567', 'tutu', true)";
		int rows = jdbcTemplate.update(sql);
		if (rows > 0){
			System.out.println("une colone a été ajouré");
			
		}
	
	}



}
