package com.app.record.facade.salary;

import com.app.record.dto.salary.SalaryRequestDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.employer.Employer;
import com.app.record.model.salary.Salary;
import com.app.record.service.EmployerService;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class SalaryRequestMapper extends GeneralFacade<Salary, SalaryRequestDto> {

    private final EmployerService employerService;

    public SalaryRequestMapper(EmployerService employerService) {
        super(Salary.class, SalaryRequestDto.class);
        this.employerService = employerService;
    }

    @Override
    protected void decorateEntity(Salary entity, SalaryRequestDto dto) {
        super.decorateEntity(entity, dto);
        DateParser dateParser = new DateParser();
        Date date = dateParser.parseStringToDate(dto.getDate());
        Employer employer = employerService.findById(dto.getEmployerId());

        System.out.println("Employer ->" + employer);

        entity.setEmployer(employer);
        entity.setDay(date);
    }
}
