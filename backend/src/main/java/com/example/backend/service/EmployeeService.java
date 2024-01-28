package com.example.backend.service;

import com.example.backend.repository.DistrictRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.UpozilaRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class EmployeeService {
    private final EntityManager entityManager;
    @Autowired
    private EmployeeRepository employeeRepository;

    public Object search() {
        return this.employeeRepository.findAll();
    }

//    public Object searchWithDistrictList() {
//        return "aa";
//    }
}
