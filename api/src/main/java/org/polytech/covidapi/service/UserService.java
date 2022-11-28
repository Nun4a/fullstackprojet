package org.polytech.covidapi.service;

import org.polytech.covidapi.exception.UserNotFoundException;

import java.util.Collection;
import java.util.List;

import org.polytech.covidapi.model.User;
import org.polytech.covidapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@Scope("singleton")
public class UserService implements UserDetails{

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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return false;
    }
}