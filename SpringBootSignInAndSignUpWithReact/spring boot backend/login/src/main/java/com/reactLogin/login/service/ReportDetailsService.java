package com.reactLogin.login.service;

import com.reactLogin.login.model.ReportDetails;
import com.reactLogin.login.model.ReportDetailsDrinkWater;
import com.reactLogin.login.payload.ReportOilAndGrease;
import com.reactLogin.login.repository.ReportDetailsDrinkWaterRepository;
import com.reactLogin.login.repository.ReportDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportDetailsService {
    @Autowired
    ReportDetailsRepository reportDetailsRepository;
    @Autowired
    ReportDetailsDrinkWaterRepository reportDetailsDrinkWaterRepository;

    public ReportDetails saveReportDetails(ReportDetails reportDetails) {
        return reportDetailsRepository.save(reportDetails);
    }

    public ReportDetails updateOilAndGrease(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetails reportDetails1 = reportDetailsRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setOilAndGrease(reportOilAndGrease.getOilAndGrease());
        return reportDetailsRepository.save(reportDetails1);

    }

    public ReportDetails updateTss(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetails reportDetails1 = reportDetailsRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setTss(reportOilAndGrease.getOilAndGrease());
        return reportDetailsRepository.save(reportDetails1);
    }

    public ReportDetails updateCOD(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetails reportDetails1 = reportDetailsRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setCod(reportOilAndGrease.getOilAndGrease());
        return reportDetailsRepository.save(reportDetails1);
    }

    public ReportDetailsDrinkWater saveReportDetailsDrinkWater(ReportDetailsDrinkWater reportDetailsDrinkWater) {
        return reportDetailsDrinkWaterRepository.save(reportDetailsDrinkWater);
    }

    public ReportDetailsDrinkWater updateAlkalinity(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetailsDrinkWater reportDetails1 = reportDetailsDrinkWaterRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setAlkalinity(reportOilAndGrease.getOilAndGrease());
        return reportDetailsDrinkWaterRepository.save(reportDetails1);
    }

    public ReportDetailsDrinkWater updateHardness(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetailsDrinkWater reportDetails1 = reportDetailsDrinkWaterRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setHardness(reportOilAndGrease.getOilAndGrease());
        return reportDetailsDrinkWaterRepository.save(reportDetails1);
    }

    public ReportDetailsDrinkWater updateCAHardness(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetailsDrinkWater reportDetails1 = reportDetailsDrinkWaterRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setCaHardness(reportOilAndGrease.getOilAndGrease());
        return reportDetailsDrinkWaterRepository.save(reportDetails1);
    }

    public ReportDetailsDrinkWater updateMGHardness(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetailsDrinkWater reportDetails1 = reportDetailsDrinkWaterRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setMgHardness(reportOilAndGrease.getOilAndGrease());
        return reportDetailsDrinkWaterRepository.save(reportDetails1);
    }

    public ReportDetailsDrinkWater updateChloride(ReportOilAndGrease reportOilAndGrease, String report_id) {
        ReportDetailsDrinkWater reportDetails1 = reportDetailsDrinkWaterRepository.findById(Long.valueOf(report_id)).get();
        reportDetails1.setChloride(reportOilAndGrease.getOilAndGrease());
        return reportDetailsDrinkWaterRepository.save(reportDetails1);
    }
}
