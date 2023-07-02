package com.app.record.dto.workingDay;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkingDayRequestDto {
    private String date;
    private String employer;
    private int cashProfit;
    private int cardProfit;
    private int profit;
    private double employerPercent;
    private int dailySalary;
    private int salary;
    private int clearProfit;

    @Override
    public String toString() {
        return "WorkingDayRequestDto{" +
                "date='" + date + '\'' +
                ", employer='" + employer + '\'' +
                ", cashProfit=" + cashProfit +
                ", cardProfit=" + cardProfit +
                ", profit=" + profit +
                ", employerPercent=" + employerPercent +
                ", dailySalary=" + dailySalary +
                ", salary=" + salary +
                ", clearProfit=" + clearProfit +
                '}';
    }
}
