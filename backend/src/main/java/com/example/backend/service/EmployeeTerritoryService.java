package com.example.backend.service;

import com.example.backend.entity.EmployeeTerritory;
import com.example.backend.repository.EmployeeTerritoryRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class EmployeeTerritoryService {
    private final EntityManager entityManager;
    @Autowired
    private EmployeeTerritoryRepository employeeTerritoryRepository ;

    public List<EmployeeTerritory> search() {
        return this.employeeTerritoryRepository.findAll();
    }
}
