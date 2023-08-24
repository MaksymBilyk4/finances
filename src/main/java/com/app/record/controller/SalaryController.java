package com.app.record.controller;

import com.app.record.dto.salary.SalaryRequestDto;
import com.app.record.dto.salary.SalaryResponseDto;
import com.app.record.facade.salary.SalaryRequestMapper;
import com.app.record.facade.salary.SalaryResponseMapper;
import com.app.record.model.salary.Salary;
import com.app.record.service.SalaryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/salary")
public class SalaryController {

    private final SalaryService salaryService;
    private final SalaryResponseMapper responseMapper;
    private final SalaryRequestMapper requestMapper;

    @GetMapping
    public List<SalaryResponseDto> findAll() {
        return salaryService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public SalaryResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(salaryService.findById(id));
    }

    @GetMapping("/date")
    public List<SalaryResponseDto> findByPeriod(
            @RequestParam String start,
            @RequestParam String end
    ) {
        return salaryService.findAllByPeriod(start, end)
                .stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }


    @PostMapping
    public SalaryResponseDto create(
            @RequestBody SalaryRequestDto dto
    ) {
        System.out.println("Salary dto ->" + dto);
        Salary salary = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(salaryService.create(salary));
    }

    @DeleteMapping("/{id}")
    public void deleteById(
            @PathVariable Long id
    ) {
        salaryService.deleteById(id);
    }

    @DeleteMapping
    public void deleteAll() {
        salaryService.deleteAll();
    }
}
