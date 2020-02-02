package com.reactLogin.login.controller;

import com.reactLogin.login.model.Client;
import com.reactLogin.login.model.User;
import com.reactLogin.login.service.ClientService;
import com.reactLogin.login.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ClientController {
    @Autowired
    private MapValidationErrorService mapValidationErrorService;
    
    @Autowired
    ClientService clientService;

    @PostMapping("/client")
    public ResponseEntity<?> addClient(@Valid @RequestBody Client client, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        Client newClient = clientService.saveClient(client);

        return  new ResponseEntity<Client>(newClient, HttpStatus.CREATED);
    }
    @GetMapping("/client")
    public ResponseEntity<?> getAllClient(){

        List<Client> clients = clientService.getAllClient();

        return  new ResponseEntity<>(clients, HttpStatus.CREATED);
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<?> getEachClient(@PathVariable String id){
        System.out.println(id);
        Client client = clientService.getClient(id);

        return  new ResponseEntity<>(client, HttpStatus.CREATED);
    }

}
