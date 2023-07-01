package com.app.record.service;

import com.app.record.model.workingDay.WorkingDay;
import com.app.record.repository.WorkingDayRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class WorkingDayService implements BaseService<WorkingDay> {

    private final WorkingDayRepository workingDayRepository;

    @Override
    public List<WorkingDay> findAll() {
        return workingDayRepository.findAll();
    }

    @Override
    public Page<WorkingDay> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(size, pageNumber, Sort.by("day"));
        return workingDayRepository.findAll(pageable);
    }

    @Override
    public WorkingDay findById(Long id) {
        Optional<WorkingDay> day = workingDayRepository.findById(id);

        return day.orElse(null);
    }

    @Override
    public WorkingDay update(WorkingDay obj) {
        return workingDayRepository.save(obj);
    }

    @Override
    public WorkingDay create(WorkingDay obj) {
        return workingDayRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        workingDayRepository.deleteById(id);
    }

    @Override
    public boolean deleteByDate (Date date) {
        return workingDayRepository.deleteByDay(date);
    }

    @Override
    public WorkingDay findByDate (Date date) {
        Optional<WorkingDay> day = workingDayRepository.findByDay(date);
        return day.orElse(null);
    }
}
