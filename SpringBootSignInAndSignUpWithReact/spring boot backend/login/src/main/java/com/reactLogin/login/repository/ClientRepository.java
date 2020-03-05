package com.reactLogin.login.repository;

import com.reactLogin.login.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByclientName(String id);

    Client findBycompanyName(String id);
}
