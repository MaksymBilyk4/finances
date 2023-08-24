package com.app.record.service;

import com.app.record.model.expense.Expense;
import com.app.record.repository.ExpensesRepository;
import com.app.record.utils.DateParser;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
@AllArgsConstructor
public class ExpenseService implements BaseService<Expense> {

    private final ExpensesRepository expensesRepository;

    @Override
    public List<Expense> findAll() {
        return expensesRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(Expense::getDay)
                        .reversed())
                .collect(Collectors.toList());
    }

    @Override
    public Page<Expense> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by("day"));
        return expensesRepository.findAll(pageable);
    }

    @Override
    public Expense findById(Long id) {
        Optional<Expense> expense = expensesRepository.findById(id);
        return expense.orElse(null);
    }

    @Override
    public Expense update(Expense obj, Long id) {
        Expense expense = findById(id);

        expense.setCash(obj.getCash());
        expense.setDay(obj.getDay());
        expense.setName(obj.getName());

        return expensesRepository.save(expense);
    }

    @Override
    public Expense create(Expense obj) {
        return expensesRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        expensesRepository.deleteById(id);
    }

    //    @Override
    public Optional<Expense> findByDate(String dateStr) {
        Date date = new DateParser().parseStringToDate(dateStr);

        return expensesRepository.findByDay(date);
    }

    @Override
    public List<Expense> findAllByPeriod(String start, String end) {
        List<Expense> days = findAll();

        DateParser dateParser = new DateParser();

        Calendar startCalendar = Calendar.getInstance();
        Date startDate = dateParser.parseStringToDate(start);
        startCalendar.setTime(startDate);
        startCalendar.add(Calendar.HOUR_OF_DAY, -24);

        Calendar endCalendar = Calendar.getInstance();
        Date endDate = dateParser.parseStringToDate(end);
        endCalendar.setTime(endDate);
        endCalendar.add(Calendar.HOUR_OF_DAY, +24);


        return new ArrayList<>(days.stream()
                .filter(d -> d.getDay().after(startCalendar.getTime()) && d.getDay().before(endCalendar.getTime()))
                .sorted(Comparator.comparing(Expense::getDay))
                .toList());
    }
}
