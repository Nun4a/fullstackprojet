INSERT INTO address (city, street, zipcode) VALUES ('Metz', 'rue de la ville', '57000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Place Stanislat', '54000');
INSERT INTO address (city, street, zipcode) VALUES ('Lyon', 'rue Jean-Luc', '69000');
INSERT INTO doctor (first_name, last_name, mail, phone_number, id_address, vaccinated) VALUES ('Jean', 'Dupond', 'Jean.Dupond@mail.com','0606060606', '1' , true);
INSERT INTO patient (first_name, last_name, mail, phone_number, id_address, vaccinated) VALUES ('Pierre', 'Moulin', 'Pierre.Moulin@mail.com','0606060606', '2' , true);
INSERT INTO admin (first_name, last_name, mail, phone_number, id_address) VALUES ('admin', 'admin', 'admin','1234567', '3' );
INSERT INTO super_admin (first_name, last_name, mail, phone_number) VALUES ('supadmin', 'supadmin', 'supadmin','1234567');