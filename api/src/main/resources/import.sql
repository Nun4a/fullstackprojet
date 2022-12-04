INSERT INTO address (city, street, zipcode) VALUES ('Metz', 'rue de la ville', '57000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Place Stanislat', '54000');
INSERT INTO address (city, street, zipcode) VALUES ('Lyon', 'rue Jean-Luc', '69000');
INSERT INTO address (city, street, zipcode) VALUES ('Paris', 'rue de la Paix', '75000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Bd de Strasbourg', '54000');

INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Centre de Nancy', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint jack', '40', 'timetable', '1');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint seb', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Stan', '40', 'timetable', '2');


INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa','tot.tat@gmail.com', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', 'tot.tot@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','2');