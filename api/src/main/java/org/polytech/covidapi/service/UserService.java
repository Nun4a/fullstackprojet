package org.polytech.covidapi.service;

import org.polytech.covidapi.exception.UserNotFoundException;
import java.util.List;

import org.polytech.covidapi.model.User;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@Scope("singleton")
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user){
        return userRepository.save(user);
    }

    public User update(Integer id, User updatedUser) throws UserNotFoundException{
        return userRepository.save(updatedUser);

    }

    public void delete(Integer id) throws UserNotFoundException{
        userRepository.deleteById(id);
    }

    public User findOnebyId(Integer id) throws UserNotFoundException{
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public List<User> findAllByNaleLike(String name){
        return findAll().stream()
            .filter(p->StringUtils.startsWithIgnoreCase(p.getFirstName(), name))
            .toList();
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }
}