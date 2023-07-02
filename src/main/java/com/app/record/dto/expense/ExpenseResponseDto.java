package com.app.record.dto.expense;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseResponseDto {

    private Long id;
    private String date;
    private String name;
    private int cash;

    @Override
    public String toString() {
        return "ExpenseResponseDto{" +
                "id=" + id +
                ", day='" + date + '\'' +
                ", name='" + name + '\'' +
                ", cash=" + cash +
                '}';
    }
}
