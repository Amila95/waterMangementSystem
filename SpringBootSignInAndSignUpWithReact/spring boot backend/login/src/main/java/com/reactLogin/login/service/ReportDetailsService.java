package com.reactLogin.login.service;

import com.reactLogin.login.model.ReportDetails;
import com.reactLogin.login.repository.ReportDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportDetailsService {
    @Autowired
    ReportDetailsRepository reportDetailsRepository;

    public ReportDetails saveReportDetails(ReportDetails reportDetails) {
        return reportDetailsRepository.save(reportDetails);
    }
}
