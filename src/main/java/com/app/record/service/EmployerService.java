package com.app.record.service;

import com.app.record.model.employer.Employer;
import com.app.record.repository.EmployerRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployerService implements BaseService<Employer> {

    private final EmployerRepository employerRepository;

    @Override
    public List<Employer> findAll() {
        return employerRepository.findAll();
    }

    @Override
    public Page<Employer> findAllPageable(int size, int pageNumber) {
        // needn't to implement
        return null;
    }

    @Override
    public Employer findById(Long id) {
        return employerRepository.findById(id).orElse(null);
    }

    @Override
    public Employer update(Employer obj, Long id) {
        Employer employer = findById(id);

        employer.setName(obj.getName());

        return employerRepository.save(employer);
    }

    @Override
    public Employer create(Employer obj) {
        return employerRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        employerRepository.deleteById(id);
    }

    @Override
    public List<Employer> findAllByPeriod(String start, String end) {
        // needn't to implement
        return null;
    }

    public Employer findByName(String name) {
        return employerRepository.findEmployerByName(name);
    }

    public void deleteAll() {
        employerRepository.deleteAll();
    }
}
