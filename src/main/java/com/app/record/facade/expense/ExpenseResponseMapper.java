package com.app.record.facade.expense;

import com.app.record.dto.expense.ExpenseResponseDto;
import com.app.record.facade.GeneralFacade;
import com.app.record.model.expense.Expense;
import com.app.record.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class ExpenseResponseMapper extends GeneralFacade<Expense, ExpenseResponseDto> {
    public ExpenseResponseMapper() {
        super(Expense.class, ExpenseResponseDto.class);
    }

    @Override
    protected void decorateDto(ExpenseResponseDto dto, Expense entity) {
        DateParser dateParser = new DateParser();
        String formatted = dateParser.parseDateToString(entity.getDay());

        dto.setDate(formatted);
    }
}
