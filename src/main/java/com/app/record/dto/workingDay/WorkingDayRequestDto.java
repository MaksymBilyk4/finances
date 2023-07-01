package com.app.record.dto.workingDay;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class WorkingDayRequestDto {
    private Date date;
    private String employer;
    private int cashProfit;
    private int cardProfit;
    private int dailySalary;
    private int salary;
}
