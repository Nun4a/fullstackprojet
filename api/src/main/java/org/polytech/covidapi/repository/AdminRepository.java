package org.polytech.covidapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{
    
}
