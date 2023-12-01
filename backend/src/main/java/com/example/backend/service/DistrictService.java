package com.example.backend.service;

import com.example.backend.entity.District;
import com.example.backend.entity.QUserInfo;
import com.example.backend.entity.QUserInfoRole;
import com.example.backend.entity.UserInfo;
import com.example.backend.repository.DistrictRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class DistrictService {

    private final EntityManager entityManager;
    @Autowired
    private DistrictRepository districtRepository;
    public List<District> search() {
        return this.districtRepository.findAll();
    }
}
