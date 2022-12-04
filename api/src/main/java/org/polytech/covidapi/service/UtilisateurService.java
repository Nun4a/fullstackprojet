package org.polytech.covidapi.service;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.polytech.covidapi.model.Utilisateur;
import org.polytech.covidapi.repository.UtilisateurRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

@Service
public class UtilisateurService implements UserDetailsService{

    @Autowired
    private UtilisateurRepository repository;
    private static Logger log = LoggerFactory.getLogger(UtilisateurService.class);
    private final PasswordEncoder passwordEncoder;
    


    
    public List<Utilisateur> findAll() {

        var utilisateurs = (List<Utilisateur>) repository.findAll();

        return utilisateurs;
    }
    
    public Utilisateur save(Utilisateur utilisateur){
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
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



    @Autowired
    public UtilisateurService(final UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder) {
        this.repository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    
    @PostConstruct
    public void createUserDefault(){
        log.info("Creation du user defaut");
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setMail("user");
        utilisateur.setRole("Patient");
        utilisateur.setPassword(passwordEncoder.encode("password"));
        this.repository.save(utilisateur);
        log.info("Creation du user admin");
        Utilisateur admin = new Utilisateur();
        admin.setMail("admin");
        admin.setRole("SuperAdmin");
        admin.setPassword(passwordEncoder.encode("password"));
        this.repository.save(admin);
    }
    
    
    @Override
    public UserDetails loadUserByUsername(final String mail)
            throws UsernameNotFoundException {
        log.info("recuperation de {}", mail);
    
        Optional<Utilisateur> optionalUtilisateur = repository.findByMail(mail);
        if (optionalUtilisateur.isPresent()) {
            Utilisateur utilisateur = optionalUtilisateur.get();
            return new User(utilisateur.getMail(), utilisateur.getPassword(), List.of());
        } else {
            throw new UsernameNotFoundException("L'utilisateur" + mail + " n'existe pas");
        }

    }
}