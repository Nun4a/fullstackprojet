INSERT INTO address (city, street, zipcode) VALUES ('Metz', 'rue de la ville', '57000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Place Stanislat', '54000');
INSERT INTO address (city, street, zipcode) VALUES ('Lyon', 'rue Jean-Luc', '69000');
INSERT INTO address (city, street, zipcode) VALUES ('Paris', 'rue de la Paix', '75000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Bd de Strasbourg', '54000');

INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Centre de Nancy', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint jack', '40', 'timetable', '1');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint seb', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Stan', '40', 'timetable', '2');


INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', '1234', 'tot.tat@gmail.com','SuperAdmin','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', '1234', 'tot.tat@gmail.com','Admin','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', '1234', 'tot.tat@gmail.com','Patient','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', '1234', 'tot.tat@gmail.com','Doctor','2');