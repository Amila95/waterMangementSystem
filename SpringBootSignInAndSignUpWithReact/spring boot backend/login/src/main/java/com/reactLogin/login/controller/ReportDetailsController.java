package com.reactLogin.login.controller;


import com.reactLogin.login.model.Client;
import com.reactLogin.login.model.ReportDetails;
import com.reactLogin.login.model.ReportDetailsDrinkWater;
import com.reactLogin.login.payload.ReportOilAndGrease;
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
    @PostMapping("/reportDetailsDrinkWater")
    public ResponseEntity<?> addReportDetailsDrinkingWater(@Valid @RequestBody ReportDetailsDrinkWater reportDetailsDrinkWater, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetailsDrinkWater1 = reportDetailsService.saveReportDetailsDrinkWater(reportDetailsDrinkWater);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetailsDrinkWater1, HttpStatus.CREATED);
    }
    @PatchMapping("/updateOilAndGrease/{report_id}")
    public ResponseEntity<?> updateOilAndGrease(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetails reportDetail = reportDetailsService.updateOilAndGrease(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetails>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateTss/{report_id}")
    public ResponseEntity<?> updateTss(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetails reportDetail = reportDetailsService.updateTss(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetails>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateCOD/{report_id}")
    public ResponseEntity<?> updateCOD(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetails reportDetail = reportDetailsService.updateCOD(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetails>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateAlkalinity/{report_id}")
    public ResponseEntity<?> updateAlkalinity(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetail = reportDetailsService.updateAlkalinity(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateHardness/{report_id}")
    public ResponseEntity<?> updateHardness(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetail = reportDetailsService.updateHardness(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateCAHardness/{report_id}")
    public ResponseEntity<?> updatecaHardness(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetail = reportDetailsService.updateCAHardness(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateMGHardness/{report_id}")
    public ResponseEntity<?> UpdateMgHardness(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetail = reportDetailsService.updateMGHardness(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetail, HttpStatus.CREATED);
    }

    @PatchMapping("/updateChloride/{report_id}")
    public ResponseEntity<?> updateChloride(@Valid @RequestBody ReportOilAndGrease reportOilAndGrease, BindingResult result, @PathVariable String report_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        ReportDetailsDrinkWater reportDetail = reportDetailsService.updateChloride(reportOilAndGrease, report_id);

        return  new ResponseEntity<ReportDetailsDrinkWater>(reportDetail, HttpStatus.CREATED);
    }

}
