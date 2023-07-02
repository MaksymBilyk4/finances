package com.app.record.facade.workingDay;

import com.app.record.dto.workingDay.WorkingDayResponseDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.workingDay.WorkingDay;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class WorkingDayResponseMapper extends GeneralFacade<WorkingDay, WorkingDayResponseDto> {

    public WorkingDayResponseMapper() {
        super(WorkingDay.class, WorkingDayResponseDto.class);
    }

    @Override
    protected void decorateDto(WorkingDayResponseDto dto, WorkingDay entity) {
        dto.setUuid(entity.getKey());
        dto.setEmployer(String.valueOf(entity.getEmployerName()));


        DateParser dateParser = new DateParser();
        String formatted = dateParser.parseDateToString(entity.getDay());

        dto.setDay(formatted);
    }

}
