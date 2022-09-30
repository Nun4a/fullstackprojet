package org.polytech.covidapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.polytech.covidapi.Entity.Users;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer>{
    
}
