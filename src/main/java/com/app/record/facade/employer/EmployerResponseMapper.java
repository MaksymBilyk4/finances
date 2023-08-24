package com.app.record.facade.employer;

import com.app.record.dto.employer.EmployerResponseDto;
import com.app.record.dto.salary.SalaryResponseDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.facade.salary.SalaryResponseMapper;
import com.app.record.model.employer.Employer;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EmployerResponseMapper extends GeneralFacade<Employer, EmployerResponseDto> {

    private final SalaryResponseMapper salaryResponseMapper;

    public EmployerResponseMapper(SalaryResponseMapper salaryResponseMapper) {
        super(Employer.class, EmployerResponseDto.class);
        this.salaryResponseMapper = salaryResponseMapper;
    }

    @Override
    protected void decorateDto(EmployerResponseDto dto, Employer entity) {
        super.decorateDto(dto, entity);


        if (!entity.getSalary().isEmpty()) {
            Set<SalaryResponseDto> salaryResponseDto = entity.getSalary().stream()
                    .map(salaryResponseMapper::convertToDto)
                    .collect(Collectors.toSet());
            dto.setSalary(salaryResponseDto);
        } else {
            dto.setSalary(new HashSet<>());
        }

    }
}
