package com.app.record.model.expense;

import com.app.record.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "expenses")
public class Expense extends BaseEntity {

    @Column(name = "day", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date day;

    @Column(name = "description", nullable = false)
    private String name;

    @Column(name = "spendings", nullable = false)
    private int cash;
}
