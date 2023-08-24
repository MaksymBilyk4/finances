package com.app.record.dto.employer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployerRequestDto {

    private String name;
    private String status;
    private String description;

    @Override
    public String toString() {
        return "EmployerRequestDto{" +
                "name='" + name + '\'' +
                ", isActive=" + status +
                ", description='" + description + '\'' +
                '}';
    }
}
