package com.example.backend.service;

import com.example.backend.entity.*;
import com.example.backend.repository.DivisionRepository;
import com.example.backend.util.transform.TransformUtil;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DivisionService {

    private final EntityManager entityManager;
    @Autowired
    private DivisionRepository divisionRepository;

    public List<Division> search() {
        return this.divisionRepository.findAll();
    }

    public List<Division> searchWithDistrictList() {
        final QDistrict qdistrict = QDistrict.district;
        final QDivision qDivision = QDivision.division;
        final JPAQuery<Division> query = new JPAQuery<>(entityManager);
        List<Division> divisionWithDistrictList = query.from(qDivision)
                .leftJoin(qDivision.districtList, qdistrict).fetchJoin()
                .fetch();
        List<Division> divisionWithDistrictListRsp = divisionWithDistrictList.stream().map(e -> {
            e.setDistrictListSerde(TransformUtil.copyList(e.getDistrictList(), District.class));
            return e;
        }).toList();
        return divisionWithDistrictList;
    }
}
