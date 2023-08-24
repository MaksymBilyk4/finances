package com.app.record.model.salary;

import com.app.record.model.BaseEntity;
import com.app.record.model.employer.Employer;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "salary")
public class Salary extends BaseEntity {

    @Column(name = "day", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date day;

    @Column(name = "salary", nullable = false)
    private int salary;

    @ManyToOne
    @JoinColumn(name = "employer_id", nullable = false)
    private Employer employer;

    @Override
    public String toString() {
        return "Salary{" +
                "day=" + day +
                ", salary=" + salary +
                ", employer=" + employer.getId() +
                '}';
    }
}
