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

		// String sql = "INSERT INTO address (id, city, street, zipcode) VALUES ('0','Metz', 'Ici', '57000')";
		// int rows = jdbcTemplate.update(sql);
		// if (rows > 0){
		// 	System.out.println("une colone a été ajouté");
			
		// }

		// sql = "INSERT INTO patient (id, first_name, last_name, mail, phone_number, id_address, vaccinated) VALUES ('0','toto', 'tata', 'titi','1234567', '0' , true)";
		// rows = jdbcTemplate.update(sql);
		// if (rows > 0){
		// 	System.out.println("une colone a été ajouté");
			
		// }

		// sql = "INSERT INTO admin (id, first_name, last_name, mail, phone_number, id_address) VALUES ('0','admin', 'admin', 'admin','1234567', '0' )";
		// rows = jdbcTemplate.update(sql);
		// if (rows > 0){
		// 	System.out.println("une colone a été ajouté");
			
		// }

		// sql = "INSERT INTO super_admin (id, first_name, last_name, mail, phone_number, id_address) VALUES ('0','supadmin', 'supadmin', 'supadmin','1234567', '0' )";
		// rows = jdbcTemplate.update(sql);
		// if (rows > 0){
		// 	System.out.println("une colone a été ajouté");
		// }
	
	}



}
