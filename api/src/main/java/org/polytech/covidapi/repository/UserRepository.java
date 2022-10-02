package org.polytech.covidapi.repository;

import org.polytech.covidapi.model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer>{
    
}
