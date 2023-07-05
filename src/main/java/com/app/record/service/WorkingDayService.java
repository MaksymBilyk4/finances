package com.app.record.service;

import com.app.record.model.workingDay.WorkingDay;
import com.app.record.repository.WorkingDayRepository;
import com.app.record.utils.DateParser;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

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
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by("day"));
        return workingDayRepository.findAll(pageable);
    }

    @Override
    public WorkingDay findById(Long id) {
        Optional<WorkingDay> day = workingDayRepository.findById(id);

        return day.orElse(null);
    }

    @Override
    public WorkingDay update(WorkingDay obj, Long id) {
        WorkingDay day = findById(id);

        day.setDay(obj.getDay());
        day.setEmployerName(obj.getEmployerName());
        day.setCashProfit(obj.getCashProfit());
        day.setCardProfit(obj.getCardProfit());
        day.setProfit(obj.getProfit());
        day.setEmployerPercent(obj.getEmployerPercent());
        day.setDailySalary(obj.getDailySalary());
        day.setSalary(obj.getSalary());
        day.setClearProfit(obj.getClearProfit());

        return workingDayRepository.save(day);
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
    public WorkingDay findByDate(String dateStr) {
        Date date = new DateParser().parseStringToDate(dateStr);
        Optional<WorkingDay> day = workingDayRepository.findByDay(date);

        return day.orElse(null);
    }

    @Override
    public List<WorkingDay> findAllByPeriod(String start, String end) {
        List<WorkingDay> days = findAll();

        DateParser dateParser = new DateParser();

        Date startDate = dateParser.parseStringToDate(start);
        Date endDate = dateParser.parseStringToDate(end);


        List<WorkingDay> filtered = new ArrayList<>(days.stream()
                .filter(d -> d.getDay().after(startDate) && d.getDay().before(endDate))
                .toList());

        filtered.add(0, findByDate(start));
        filtered.add(findByDate(end));

        return filtered;
    }
}
