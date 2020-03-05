package com.reactLogin.login.service;

import com.reactLogin.login.exceptions.CompanyAlreadyExistsException;
import com.reactLogin.login.exceptions.CompanyAlreadyExistsResponse;
import com.reactLogin.login.exceptions.UsernameAlreadyExistsException;
import com.reactLogin.login.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.reactLogin.login.model.Client;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    public Client saveClient(Client newClient){
        try{
//            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
//            //Username has to be unique (exception)
//            newUser.setUsername(newUser.getUsername());
//
//            // Make sure that password and confirmPassword match
//            // We don't persist or show the confirmPassword
//            newUser.setConfirmPassword("");
//            return userRepository.save(newUser);
            return clientRepository.save(newClient);

        }catch (Exception e){
            throw new CompanyAlreadyExistsException("Company name '"+newClient.getCompanyName()+"' already exists");
        }

        //return clientRepository.save(newClient);
    }

    public List<Client> getAllClient() {
        return clientRepository.findAll();
    }

    public Client getClient(String id) {
        return clientRepository.findById(Long.valueOf(id)).get();
    }

    public Client getClientByName(String id) {
        return clientRepository.findBycompanyName(id);
    }
}
