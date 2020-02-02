package com.reactLogin.login.controller;


import com.reactLogin.login.model.Client;
import com.reactLogin.login.model.ReportDetails;
import com.reactLogin.login.service.MapValidationErrorService;
import com.reactLogin.login.service.ReportDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ReportDetailsController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ReportDetailsService reportDetailsService;

    @PostMapping("/reportDetails")
    public ResponseEntity<?> addReportDetails(@Valid @RequestBody ReportDetails reportDetails, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetails reportDetail = reportDetailsService.saveReportDetails(reportDetails);

        return  new ResponseEntity<ReportDetails>(reportDetail, HttpStatus.CREATED);
    }

}
