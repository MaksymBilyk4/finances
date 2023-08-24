package com.app.record.facade.employer;

import com.app.record.dto.employer.EmployerRequestDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.employer.Employer;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class EmployerRequestMapper extends GeneralFacade<Employer, EmployerRequestDto> {
    public EmployerRequestMapper() {
        super(Employer.class, EmployerRequestDto.class);
    }

    @Override
    protected void decorateEntity(Employer entity, EmployerRequestDto dto) {
        super.decorateEntity(entity, dto);

        entity.setSalary(new HashSet<>());
    }
}
