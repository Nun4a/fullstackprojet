package org.polytech.covidapi.repository;

import java.util.List;

import org.polytech.covidapi.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{

    List<Utilisateur> findByRole(String role) ;
    
}