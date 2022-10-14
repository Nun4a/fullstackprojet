INSERT INTO address (city, street, zipcode) VALUES ('Metz', 'rue de la ville', '57000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Place Stanislat', '54000');
INSERT INTO address (city, street, zipcode) VALUES ('Lyon', 'rue Jean-Luc', '69000');
INSERT INTO address (city, street, zipcode) VALUES ('Paris', 'rue de la Paix', '75000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Bd de Strasbourg', '54000');

INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Centre de Nancy', '40', 'timetable', '5');

INSERT INTO doctor (firstname, lastname, mail, phone_number, id_address) VALUES ('Jean', 'Dupond', 'jean.dupond@mail.com','0606060606', '1');
INSERT INTO patient (firstname, lastname, mail, phone_number, id_address, vaccinated) VALUES ('Pierre', 'Moulin', 'pierre.moulin@mail.com','0606060607', '2' , true);
INSERT INTO admin (firstname, lastname, mail, phone_number, id_address) VALUES ('admin', 'admin', 'admin@mail.com','1234567', '3' );
INSERT INTO super_admin (firstname, lastname, mail, phone_number, id_address) VALUES ('supadmin', 'supadmin', 'supadmin@mail.com','1234567', '4');