package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{
    @Modifying
    @Transactional
    @Query("UPDATE address as a SET a.street = :street, a.zipcode = :zipcode, a.city = :city WHERE a.id = :addressId")
    void updateAddress(String street, String zipcode, String city, int addressId);

    @Query(value = "SELECT MAX(id) FROM address", nativeQuery = true)
    int findMaxId();
    
}