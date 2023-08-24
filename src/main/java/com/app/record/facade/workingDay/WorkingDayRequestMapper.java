package com.app.record.facade.workingDay;

import com.app.record.dto.workingDay.WorkingDayRequestDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.workingDay.WorkingDay;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class WorkingDayRequestMapper extends GeneralFacade<WorkingDay, WorkingDayRequestDto> {

    private final DateParser dateParser;

    public WorkingDayRequestMapper() {
        super(WorkingDay.class, WorkingDayRequestDto.class);
        this.dateParser = new DateParser();
    }

    @Override
    protected void decorateEntity(WorkingDay entity, WorkingDayRequestDto dto) {
        Date date = dateParser.parseStringToDate(dto.getDate());
        entity.setDay(date);

        entity.setEmployerName(dto.getEmployer());
    }

}
