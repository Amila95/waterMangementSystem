package com.reactLogin.login.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReportDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "date is required")
    private String date;
    @NotBlank(message = "refNo is required")
    private String refNo;
    @NotBlank(message = "sampleNo is required")
    private String sampleNo;
    @NotBlank(message = "client is required")
    private String client;
    @NotBlank(message = "sample is required")
    private String sample;
    @NotBlank(message = "date of sampling is required")
    private String dateOfSampling;
    @NotBlank(message = "time of sampling is required")
    private String timeOfSampling;
    @NotBlank(message = "source is required")
    private String source;
    @NotBlank(message = "sampling Carried Out By is required")
    private String samplingCarriedOutBy;
    @NotBlank(message = "location is required")
    private String location;
    @NotBlank(message = "analysis stated date is required")
    private String analysisStatedDate;
    @NotBlank(message = "analysis end date chemical is required")
    private String analysisEndDate_Chemical;
    @NotBlank(message = "date of sampling is required")
    private String analysisEndDate_Bio;
    private String oilAndGrease;
    private String tss;
    private String cod;

}
