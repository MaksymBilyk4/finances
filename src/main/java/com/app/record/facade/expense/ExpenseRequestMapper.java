package com.app.record.facade.expense;

import com.app.record.dto.expense.ExpenseRequestDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.expense.Expense;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ExpenseRequestMapper extends GeneralFacade<Expense, ExpenseRequestDto> {
    public ExpenseRequestMapper() {
        super(Expense.class, ExpenseRequestDto.class);
    }

    @Override
    protected void decorateEntity(Expense entity, ExpenseRequestDto dto) {
        DateParser dateParser = new DateParser();
        Date date = dateParser.parseStringToDate(dto.getDate());

        entity.setDay(date);
    }
}
