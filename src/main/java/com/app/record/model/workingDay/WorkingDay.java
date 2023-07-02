package com.app.record.model.workingDay;

import com.app.record.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "days")
public class WorkingDay extends BaseEntity {

    @Column(name = "day", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date day;

    @Enumerated(EnumType.STRING)
    @Column(name = "employer",  nullable = false)
    private Employer employerName;

    @Column(name = "cash_profit", nullable = false)
    private int cashProfit;

    @Column(name = "card_profit", nullable = false)
    private int cardProfit;

    @Column(name = "profit", nullable = false)
    private int profit;

    @Column(name = "percent", nullable = false)
    private double employerPercent;

    @Column(name = "daily", nullable = false)
    private int dailySalary;

    @Column(name = "salary", nullable = true)
    private int salary;

    @Column(name = "clear", nullable = false)
    private int clearProfit;

    @Override
    public String toString() {
        return "WorkingDay{" +
                "day=" + day +
                ", employerName=" + employerName +
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
