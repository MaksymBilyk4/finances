package com.app.record.service;

import java.util.List;

public interface BaseService<T> {

    List<T> findAll();

    List<T> findAllPageable(int size, int pageNumber);

    T findById(Long id);

    void update(T obj);

    void create(T obj);

    void delete(Long id);
}
