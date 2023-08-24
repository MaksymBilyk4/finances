package com.app.record.repository;

import com.app.record.model.workingDay.WorkingDay;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface WorkingDayRepository extends JpaRepository<WorkingDay, Long> {

    Page<WorkingDay> findAll(Pageable pageable);

    Optional<WorkingDay> findByDay (Date day);

    boolean deleteByDay (Date date);
}
