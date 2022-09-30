package org.polytech.covidapi.repository;

import org.polytech.covidapi.Entity.Center;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public class CenterRepository extends CrudRepository<Center, Integer> {
    
}
