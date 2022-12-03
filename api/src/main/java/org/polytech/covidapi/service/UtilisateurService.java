package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;


import org.polytech.covidapi.model.Utilisateur;
import org.polytech.covidapi.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository repository;

    
    public List<Utilisateur> findAll() {

        var utilisateurs = (List<Utilisateur>) repository.findAll();

        return utilisateurs;
    }
    
    public Utilisateur save(Utilisateur utilisateur){
        return repository.save(utilisateur);
    }

     
    public Optional<Utilisateur> findById(int id){
        return repository.findById(id);
    }

    
    public void delete(int id_utilisateur){
        repository.deleteById(id_utilisateur);
    }

    public List<Utilisateur> findadmin() {

        List<Utilisateur> utilisateurs = repository.findByRole("Admin");

        return utilisateurs;
    }
    public List<Utilisateur> findsuperadmin() {

        List<Utilisateur> utilisateurs = repository.findByRole("SuperAdmin");

        return utilisateurs;
    }
    public List<Utilisateur> finddoc() {

        List<Utilisateur> utilisateurs = repository.findByRole("Doctor");

        return utilisateurs;
    }
    public List<Utilisateur> findpatient() {

        List<Utilisateur> utilisateurs = repository.findByRole("Patient");

        return utilisateurs;
    }
}