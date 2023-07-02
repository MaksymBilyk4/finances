package com.app.record.dto.expense;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseRequestDto {

    private String date;
    private String name;
    private int cash;

    @Override
    public String toString() {
        return "ExpenseRequestDto{" +
                "day='" + date + '\'' +
                ", name='" + name + '\'' +
                ", cash=" + cash +
                '}';
    }
}
