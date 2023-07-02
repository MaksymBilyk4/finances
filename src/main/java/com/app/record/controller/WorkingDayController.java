package com.app.record.controller;

import com.app.record.dto.workingDay.WorkingDayRequestDto;
import com.app.record.dto.workingDay.WorkingDayResponseDto;
import com.app.record.facade.workingDay.WorkingDayRequestMapper;
import com.app.record.facade.workingDay.WorkingDayResponseMapper;
import com.app.record.model.workingDay.WorkingDay;
import com.app.record.service.WorkingDayService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("${api.version}/days")
public class WorkingDayController {

    private final WorkingDayResponseMapper responseMapper;
    private final WorkingDayRequestMapper requestMapper;
    private final WorkingDayService service;


    @GetMapping("/all")
    public List<WorkingDayResponseDto> findAll() {
        return service.findAll()
                .stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<WorkingDayResponseDto> findAllPageable(
            @RequestParam int pageNumber,
            @RequestParam int size
    ) {
        return service.findAllPageable(size, pageNumber)
                .stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    public WorkingDayResponseDto create(
            @RequestBody WorkingDayRequestDto dto
    ) {
        WorkingDay workingDay = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(service.create(workingDay));
    }

    @GetMapping("/{id}")
    public WorkingDayResponseDto findById (
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(service.findById(id));
    }

    @DeleteMapping("/{id}")
    public void deleteById (
            @PathVariable Long id
    ) {
        service.deleteById(id);
    }

    @PutMapping
    public WorkingDayResponseDto update(
            @RequestBody WorkingDayRequestDto dto
    ) {
        WorkingDay workingDay = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(service.update(workingDay));
    }

    @GetMapping("/{date}")
    public WorkingDayResponseDto findByDate(
            @PathVariable String date
    ) {
        return responseMapper.convertToDto(service.findByDate(date));
    }
}
