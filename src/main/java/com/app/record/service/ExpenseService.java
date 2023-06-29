package com.app.record.service;

import com.app.record.model.expense.Expense;
import com.app.record.repository.ExpensesRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class ExpenseService implements BaseService<Expense> {

    private final ExpensesRepository expensesRepository;

    @Override
    public List<Expense> findAll() {
        return null;
    }

    @Override
    public List<Expense> findAllPageable(int size, int pageNumber) {
        return null;
    }

    @Override
    public Expense findById(Long id) {
        return null;
    }

    @Override
    public void update(Expense obj) {

    }

    @Override
    public void create(Expense obj) {

    }

    @Override
    public void delete(Long id) {

    }
}
