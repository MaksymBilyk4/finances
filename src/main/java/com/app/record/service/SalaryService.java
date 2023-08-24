package com.app.record.service;

import com.app.record.model.salary.Salary;
import com.app.record.repository.SalaryRepository;
import com.app.record.utils.DateParser;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SalaryService implements BaseService<Salary> {

    private final SalaryRepository salaryRepository;

    @Override
    public List<Salary> findAll() {
        return salaryRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(Salary::getDay).reversed())
                .collect(Collectors.toList());
    }

    @Override
    public Page<Salary> findAllPageable(int size, int pageNumber) {
        return null;
    }

    @Override
    public Salary findById(Long id) {
        return salaryRepository.findById(id).orElse(null);
    }

    @Override
    public Salary update(Salary obj, Long id) {
        return null;
    }

    @Override
    public Salary create(Salary obj) {
        return salaryRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        salaryRepository.deleteById(id);
    }

    @Override
    public List<Salary> findAllByPeriod(String start, String end) {
        List<Salary> salaries = findAll();

        DateParser dateParser = new DateParser();

        Calendar startCalendar = Calendar.getInstance();
        Date startDate = dateParser.parseStringToDate(start);
        startCalendar.setTime(startDate);
        startCalendar.add(Calendar.HOUR_OF_DAY, -24);

        Calendar endCalendar = Calendar.getInstance();
        Date endDate = dateParser.parseStringToDate(end);
        endCalendar.setTime(endDate);
        endCalendar.add(Calendar.HOUR_OF_DAY, +24);

        return new ArrayList<>(salaries.stream()
                .filter(s -> s.getDay().after(startCalendar.getTime()) && s.getDay().before(endCalendar.getTime()))
                .sorted(Comparator.comparing(Salary::getDay))
                .toList()
        );
    }

    public void deleteAll() {
        salaryRepository.deleteAll();
    }
}
