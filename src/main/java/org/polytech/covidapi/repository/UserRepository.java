package org.polytech.covidapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.Entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>{
    
}
