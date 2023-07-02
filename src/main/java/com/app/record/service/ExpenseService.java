package com.app.record.service;

import com.app.record.model.expense.Expense;
import com.app.record.repository.ExpensesRepository;
import com.app.record.utils.DateParser;
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
public class ExpenseService implements BaseService<Expense> {

    private final ExpensesRepository expensesRepository;

    @Override
    public List<Expense> findAll() {
        return expensesRepository.findAll();
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
        return expensesRepository.save(obj);
    }

    @Override
    public Expense create(Expense obj) {
        return expensesRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        expensesRepository.deleteById(id);
    }

    @Override
    public Expense findByDate(String dateStr) {
        Date date = new DateParser().parseStringToDate(dateStr);

        Optional<Expense> expense = expensesRepository.findByDay(date);
        return expense.orElse(null);
    }
}
