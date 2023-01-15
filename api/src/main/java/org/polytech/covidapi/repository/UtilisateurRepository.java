package org.polytech.covidapi.repository;

import java.util.List;
import java.util.Optional;

import org.polytech.covidapi.model.Center;
import org.polytech.covidapi.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{

    List<Utilisateur> findByRole(String role) ;

    Optional<Utilisateur> findByMail(String mail);

    @Query(value = "SELECT MAX(id) FROM utilisateur", nativeQuery = true)
    int findMaxId();

    @Query(value="SELECT * FROM utilisateur a WHERE a.role= :role and a.id_center= :centerId", nativeQuery=true)
    List<Utilisateur> getUserByCenterAndRole( @Param("centerId") int id_center, @Param("role")String role);

    @Modifying
    @Transactional
    @Query("UPDATE utilisateur as a SET a.firstName = :firstname, a.lastName = :lastname, a.mail = :mail, a.role = :role, a.center = :center WHERE a.id = :userId")
    void updateUser(String firstname, String lastname, String mail, String role, int userId, Center center);
}