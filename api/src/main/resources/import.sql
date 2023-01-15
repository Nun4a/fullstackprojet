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
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('bapt', 'taoa','bapt', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('guigui', 'taoa','guigui', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');
INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('al', 'taoa','al', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','1');

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

--
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto2', 'taoa', 'tot.tot@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','3');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto3', 'taoa', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','4');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto4', 'taoass','tot.tat@gmail.com', '$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'SuperAdmin','5');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto5', 'taovfdbgha', 'tot.tut@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Admin','1');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('toto6', 'taotoa', 'tot.tot@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Patient','2');
--INSERT INTO utilisateur (first_name, last_name, mail, password, role, id_center) VALUES ('totosept', 'taoati', 'tot.tit@gmail.com','$2y$10$l56OKChhthne5p0gZm6YV.899n/naJi8k4k2XFyT64r0ABRLggVgG', 'Doctor','3');

INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-15T23:00:00.000Z', 'axel@wanadoo.fr', '1')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-23T23:00:00.000Z', 'alban@hotmail.fr', '1')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-30T23:00:00.000Z', 'guillaume@proton.com', '2')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-25T23:00:00.000Z', 'yan@gmail.com', '3')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-22T23:00:00.000Z', 'alice@live.fr', '3')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-05T23:00:00.000Z', 'bob@gmail.com', '4')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-09T23:00:00.000Z', 'charles@wanadoo.fr', '4')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-14T23:00:00.000Z', 'daniel@gmail.com', '4')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-15T23:00:00.000Z', 'ella@hotmail.fr', '4')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-16T23:00:00.000Z', 'florence@gmail.com', '4')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-15T23:00:00.000Z', 'gregory@wanadoo.fr', '5')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-18T23:00:00.000Z', 'henia@gmail.com', '5')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-20T23:00:00.000Z', 'isabelle@wanadoo.fr', '5')
INSERT INTO appointment (day, patient_mail, center_id) VALUES ('2023-01-22T23:00:00.000Z', 'jeanne@live.fr', '5')


