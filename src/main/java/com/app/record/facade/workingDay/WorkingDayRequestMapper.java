package com.app.record.facade.workingDay;

import com.app.record.dto.workingDay.WorkingDayRequestDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.workingDay.WorkingDay;
import org.springframework.stereotype.Service;

@Service
public class WorkingDayRequestMapper extends GeneralFacade<WorkingDay, WorkingDayRequestDto> {

    public WorkingDayRequestMapper(Class<WorkingDay> eclass, Class<WorkingDayRequestDto> dclass) {
        super(eclass, dclass);
    }

    @Override
    protected void decorateEntity(WorkingDay entity, WorkingDayRequestDto dto) {
        super.decorateEntity(entity, dto);
    }

    @Override
    protected void decorateDto(WorkingDayRequestDto dto, WorkingDay entity) {
        super.decorateDto(dto, entity);
    }
}
