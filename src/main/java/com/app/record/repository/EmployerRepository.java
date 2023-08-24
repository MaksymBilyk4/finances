package com.app.record.repository;

import com.app.record.model.employer.Employer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {
    Employer findEmployerByName(String name);
}
