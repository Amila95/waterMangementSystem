package com.reactLogin.login.repository;

import com.reactLogin.login.model.ReportDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportDetailsRepository extends JpaRepository<ReportDetails, Long> {
}
