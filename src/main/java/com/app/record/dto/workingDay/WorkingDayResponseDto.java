package com.app.record.dto.workingDay;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class WorkingDayResponseDto {
    private Long id;
    private String uuid;
    private Date day;
    private String employer;
    private int cashProfit;
    private int cardProfit;
    private double employerPercent;
    private int dailySalary;
    private int salary;
    private int clearProfit;
}
