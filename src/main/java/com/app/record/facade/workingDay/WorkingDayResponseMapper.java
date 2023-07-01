package com.app.record.facade.workingDay;

import com.app.record.dto.workingDay.WorkingDayResponseDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.workingDay.WorkingDay;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class WorkingDayResponseMapper extends GeneralFacade<WorkingDay, WorkingDayResponseDto> {
    public WorkingDayResponseMapper(Class<WorkingDay> eclass, Class<WorkingDayResponseDto> dclass) {
        super(eclass, dclass);
    }

    @Override
    protected void decorateDto(WorkingDayResponseDto dto, WorkingDay entity) {
        super.decorateDto(dto, entity);
    }
}
