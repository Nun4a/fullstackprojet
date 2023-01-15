INSERT INTO address (city, street, zipcode) VALUES ('Metz', 'rue de la ville', '57000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Place Stanislat', '54000');
INSERT INTO address (city, street, zipcode) VALUES ('St Etienne', 'Av. Albert Raimond', '42270');
INSERT INTO address (city, street, zipcode) VALUES ('Paris', 'rue de la Paix', '75000');
INSERT INTO address (city, street, zipcode) VALUES ('Nancy', 'Bd de Strasbourg', '54000');

INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Centre de Nancy', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint jack', '40', 'timetable', '1');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Saint seb', '40', 'timetable', '5');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Stan', '40', 'timetable', '2');
INSERT INTO center (name, capacity, timetable, id_address) VALUES ('Nord', '60', 'timetable', '3');

--SuperUtilisateur
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('bapt', 'taoa','1234', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('guigui', 'taoa','1234', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('al', 'taoa','1234', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');

--Administrateur
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Indiana', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','1');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Jones', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Morray', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','3');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Eric', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','4');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Marie', 'taoa', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','5');

--Docteur
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('José', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','1');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Raphael', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','1');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Estelle', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Bastien', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','2');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Reda', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','3');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Pierr-lou', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','3');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Robin', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','4');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Emma', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','4');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Tristan', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','5');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Delphine', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','5');


--patient
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Jai', 'mal', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','5');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('Soignez', 'Moi', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','5');

--
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto2', 'taoa', 'tot.tot@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','3');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto3', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','4');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto4', 'taoass','tot.tat@gmail.com', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','5');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto5', 'taovfdbgha', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','1');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto6', 'taotoa', 'tot.tot@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','2');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('totosept', 'taoati', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','3');

INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (false, 5, '2022:01:23', 15, 17)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:23', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:24', 15, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:24', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:25', 15, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:25', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:26', 15, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:26', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (false, 5, '2022:01:27', 15, 18)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:27', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:28', 15, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:28', 16, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:29', 15, null)
INSERT INTO appointment (available, center_id, day, doctor_id, utilisateur_id) VALUES (true, 5, '2022:01:29', 16, null)



