package com.app.record.controller;

import com.app.record.dto.expense.ExpenseRequestDto;
import com.app.record.dto.expense.ExpenseResponseDto;
import com.app.record.facade.expense.ExpenseRequestMapper;
import com.app.record.facade.expense.ExpenseResponseMapper;
import com.app.record.model.expense.Expense;
import com.app.record.service.ExpenseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("${api.version}/expenses")
public class ExpenseController {

    private final ExpenseRequestMapper requestMapper;
    private final ExpenseResponseMapper responseMapper;
    private final ExpenseService expenseService;

    @GetMapping("/all")
    public List<ExpenseResponseDto> findAll() {
        return expenseService.findAll()
                .stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<ExpenseResponseDto> findAllPageable(
            @RequestParam int pageNumber,
            @RequestParam int size
    ) {
        return expenseService.findAllPageable(size, pageNumber)
                .stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    public ExpenseResponseDto create(
            @RequestBody ExpenseRequestDto dto
    ) {
        Expense expense = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(expenseService.create(expense));
    }

    @PutMapping("/{id}")
    public ExpenseResponseDto update(
            @RequestBody ExpenseRequestDto dto,
            @PathVariable Long id
    ) {
        Expense expense = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(expenseService.update(expense, id));
    }

    @GetMapping("/{id}")
    public ExpenseResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(expenseService.findById(id));
    }

    @DeleteMapping("/{id}")
    public void deleteById(
            @PathVariable Long id
    ) {
        expenseService.deleteById(id);
    }

    @GetMapping("/date/{date}")
    public ExpenseResponseDto findByDate(
            @PathVariable String date
    ) {
        return responseMapper.convertToDto(expenseService.findByDate(date));
    }


}
