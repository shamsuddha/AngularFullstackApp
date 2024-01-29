package com.example.backend.service;

import com.example.backend.entity.*;
import com.example.backend.repository.TerritoryRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
public class TerritoryService {

    private final EntityManager entityManager;
    @Autowired
    private TerritoryRepository territoryRepository;

    public Object search() {
        return this.territoryRepository.findAll();
    }

    public List<Territory> searchWithEmployee() {
        final QEmployee qEmployee = QEmployee.employee;
        final QTerritory qTerritory = QTerritory.territory;
        final QEmployeeTerritory qEmployeeTerritory = QEmployeeTerritory.employeeTerritory;

        final JPAQuery<Territory> query = new JPAQuery<>(entityManager);
        List<Territory> territoryList = query.from(qTerritory)
                .leftJoin(qEmployeeTerritory.employeeTerritory, qEmployeeTerritory).fetchJoin()
                .leftJoin(qEmployee.employee, qEmployee).fetchJoin()
               // .where()
                .fetch();
        return territoryList;
    }
}


