package com.reactLogin.login.service;

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
       return clientRepository.save(newClient);
    }

    public List<Client> getAllClient() {
        return clientRepository.findAll();
    }

    public Client getClient(String id) {
        return clientRepository.findById(Long.valueOf(id)).get();
    }
}
