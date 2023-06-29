package com.app.record.service;

import com.app.record.model.workingDay.WorkingDay;
import com.app.record.repository.WorkingDayRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class WorkingDayService implements BaseService<WorkingDay>{

    private final WorkingDayRepository workingDayRepository;

    @Override
    public List<WorkingDay> findAll() {
        return null;
    }

    @Override
    public List<WorkingDay> findAllPageable(int size, int pageNumber) {
        return null;
    }

    @Override
    public WorkingDay findById(Long id) {
        return null;
    }

    @Override
    public void update(WorkingDay obj) {

    }

    @Override
    public void create(WorkingDay obj) {

    }

    @Override
    public void delete(Long id) {

    }
}
