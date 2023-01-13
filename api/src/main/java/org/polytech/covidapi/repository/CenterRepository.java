package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.model.Center;

import javax.transaction.Transactional;

@Repository
public interface CenterRepository extends JpaRepository<Center, Integer>{
    @Modifying
    @Transactional
    @Query("UPDATE center as a SET a.name = :name, a.capacity = :capacity, a.timetable = :timetable, a.address = :address WHERE a.id = :centerId")
    public void updateCenter(String name, int capacity, String timetable, int centerId, Address address);
}