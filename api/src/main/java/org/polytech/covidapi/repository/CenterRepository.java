package org.polytech.covidapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.model.Center;

@Repository
public interface CenterRepository extends JpaRepository<Center, Integer>{

    @Query(value = "SELECT MAX(id) FROM center", nativeQuery = true)
    int findMaxId();
    
}