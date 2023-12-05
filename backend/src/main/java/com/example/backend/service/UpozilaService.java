package com.example.backend.service;

import com.example.backend.entity.*;
import com.example.backend.repository.UpozilaRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UpozilaService {

    private final EntityManager entityManager;
    @Autowired
    private UpozilaRepository upozilaRepository;

    public List<Upozila> search() {
        return this.upozilaRepository.findAll();
    }

    public List<Upozila> searchWithDistrict() {
        final QDistrict qDistrict = QDistrict.district;
        final QUpozila qUpozila = QUpozila.upozila;

        final JPAQuery<Upozila> query = new JPAQuery<>(entityManager);
        List<Upozila> upozilaList = query.from(qUpozila)
                .leftJoin(qUpozila.district, qDistrict).fetchJoin()
                .fetch();
        return upozilaList;
    }
}
