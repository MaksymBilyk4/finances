package com.app.record.service;

import org.springframework.data.domain.Page;

import java.util.Date;
import java.util.List;

public interface BaseService<T> {

    List<T> findAll();

    Page<T> findAllPageable(int size, int pageNumber);

    T findById(Long id);

    T update(T obj);

    T create(T obj);

    void deleteById(Long id);

    boolean deleteByDate(Date date);

    T findByDate(Date date);
}
