package org.polytech.covidapi.repository;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{

    List<Utilisateur> findByRole(String role) ;

    Optional<Utilisateur> findByMail(String mail);

    @Query(value = "SELECT MAX(id) FROM utilisateur", nativeQuery = true)
    int findMaxId();

    @Query(value="select * from utilisateur a where a.role= :role and id_center= :centerId", nativeQuery=true)
    List<Utilisateur> getUserByCenterAndRole(String role, int centerId);

}