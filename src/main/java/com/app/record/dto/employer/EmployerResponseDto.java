package com.app.record.dto.employer;

import com.app.record.dto.salary.SalaryResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployerResponseDto {

    private Long id;
    private String name;
    private String description;
    private String status;
    private Set<SalaryResponseDto> salary;

    @Override
    public String toString() {
        return "EmployerResponseDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", isActive=" + status +
                ", salary=" + salary +
                '}';
    }
}
