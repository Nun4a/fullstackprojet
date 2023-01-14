package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

    @Query(value = "SELECT MAX(id) FROM address", nativeQuery = true)
    int findMaxId();
    
}