package com.app.record.repository;

import com.app.record.model.expense.Expense;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Optional;

public interface ExpensesRepository extends JpaRepository<Expense, Long> {

    Page<Expense> findAll (Pageable pageable);

    Optional<Expense> findByDay (Date date);
}
