package com.app.record.model.employer;


import com.app.record.model.BaseEntity;
import com.app.record.model.salary.Salary;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employers")
public class Employer extends BaseEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private EmployerStatus status;

    @OneToMany(mappedBy = "employer")
    private Set<Salary> salary;

    @Override
    public String toString() {
        return "Employer{" +
                "name='" + name + '\'' +
                '}';
    }
}
