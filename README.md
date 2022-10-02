# Projet fullstack de 5A - covid-api

## Le projet

Le projet consiste à créer un site permettant à des patients de prendre rendez-vous pour se faire vacciner.

Il se compose :
- d'une API reposant sur Spring
- d'une partie front-end reposant sur Angular

## La base de données

- Base de données utilisée par l'API : **PostgreSQL**
- identifiant : **postgre**
- mdp : **sudo**

## Spécifications

- Accès publique
	- Recherche des centres d'une ville choisie (R)
	- Inscription à un centre (mail, téléphone, nom, prénom, date) (C)
- Accès administration
	- Super admin
		- Gestion des centres (CRUD)
		- Gestion des administrateurs des centres (CRUD)
	- Admin
		- Gestion des médecins de son centre de vaccination (CRU)
		- Gestion des réservations de son centre (RD)
	- Médecin
		- Recherche d'une personne par son nom (à l'arrivée d'une personne dans le centre) (R)
		- Valider la vaccination d'une personne (au départ de la personne) (U)

Rq : C = Create; R = Read; U = Update; D = Delete
