package com.app.record.controller;

import com.app.record.dto.employer.EmployerRequestDto;
import com.app.record.dto.employer.EmployerResponseDto;
import com.app.record.facade.employer.EmployerRequestMapper;
import com.app.record.facade.employer.EmployerResponseMapper;
import com.app.record.model.employer.Employer;
import com.app.record.service.EmployerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("${api.version}/employers")
public class EmployerController {

    private final EmployerService employerService;
    private final EmployerResponseMapper responseMapper;
    private final EmployerRequestMapper requestMapper;

    @GetMapping
    public List<EmployerResponseDto> findAll() {
        return employerService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/")
    public EmployerResponseDto findByName(
            @RequestParam String name
    ) {
        return responseMapper.convertToDto(employerService.findByName(name));
    }

    @GetMapping("/{id}")
    public EmployerResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(employerService.findById(id));
    }

    @PostMapping
    public EmployerResponseDto create(
            @RequestBody EmployerRequestDto dto
    ) {
        Employer employer = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(employerService.create(employer));
    }

    @PutMapping("/{id}")
    public EmployerResponseDto update(
            @RequestBody EmployerRequestDto dto,
            @PathVariable Long id
    ) {
        Employer employer = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(employerService.update(employer, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById(
            @PathVariable Long id
    ) {
        employerService.deleteById(id);
    }

    @DeleteMapping
    public void deleteAll() {
        employerService.deleteAll();
    }

}
