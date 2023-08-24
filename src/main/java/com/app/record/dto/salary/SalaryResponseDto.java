package com.app.record.dto.salary;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SalaryResponseDto {

    private Long id;
    private String day;
    private int salary;
    private String employer;

    @Override
    public String toString() {
        return "SalaryResponseDto{" +
                "id=" + id +
                ", day='" + day + '\'' +
                ", salary=" + salary +
                ", employer='" + employer + '\'' +
                '}';
    }
}
