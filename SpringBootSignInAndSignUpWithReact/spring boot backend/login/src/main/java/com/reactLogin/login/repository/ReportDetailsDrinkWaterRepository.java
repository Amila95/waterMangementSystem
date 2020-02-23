package com.reactLogin.login.repository;


import com.reactLogin.login.model.ReportDetailsDrinkWater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportDetailsDrinkWaterRepository extends JpaRepository<ReportDetailsDrinkWater, Long> {
}
