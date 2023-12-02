package com.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class EmployeeService {
    public Object search() {
        return "aa";
    }

    public Object searchWithDistrictList() {
        return "aa";
    }
}
