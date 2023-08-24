package com.app.record.facade.salary;

import com.app.record.dto.salary.SalaryResponseDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.salary.Salary;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class SalaryResponseMapper extends GeneralFacade<Salary, SalaryResponseDto> {


    public SalaryResponseMapper() {
        super(Salary.class, SalaryResponseDto.class);
    }

    @Override
    protected void decorateDto(SalaryResponseDto dto, Salary entity) {
        super.decorateDto(dto, entity);

        DateParser dateParser = new DateParser();
        String dateStr = dateParser.parseDateToString(entity.getDay());
        dto.setDay(dateStr);

        dto.setEmployer(entity.getEmployer().getName());
    }
}
