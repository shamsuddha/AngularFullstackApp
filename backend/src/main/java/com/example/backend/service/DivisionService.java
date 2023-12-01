package com.example.backend.service;

import com.example.backend.entity.Division;
import com.example.backend.entity.QUserInfo;
import com.example.backend.entity.QUserInfoRole;
import com.example.backend.entity.UserInfo;
import com.example.backend.repository.DivisionRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class DivisionService {

    private final EntityManager entityManager;
    @Autowired
    private DivisionRepository divisionRepository;
    public List<Division> search() {
        return this.divisionRepository.findAll();
    }
}
