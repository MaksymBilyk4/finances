package com.app.record.dto.salary;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryRequestDto {

    private String date;
    private int salary;
    private Long employerId;

    @Override
    public String toString() {
        return "SalaryRequestDto{" +
                "date='" + date + '\'' +
                ", salary=" + salary +
                ", employerId=" + employerId +
                '}';
    }
}
