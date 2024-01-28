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
        return this.territoryRepository.findAll();
    }

//    public List<Territory> searchWithEmployee() {
//        final QEmployee qEmployee = QEmployee.employee;
//        final QTerritory qTerritory = QTerritory.territory;
//        final QEmployeeTerritory qEmployeeTerritory = QEmployeeTerritory.employeeTerritory;
//        final JPAQuery<Territory> query = new JPAQuery<>(entityManager);
//
////        List<UserInfoRole> userInfoRoleList1 = query.from(qUserInfoRole)
////                .leftJoin(qUserInfoRole.userInfo, qUserInfo).fetchJoin()
////                .leftJoin(qUserInfoRole.role, qRole).fetchJoin()
////                .where(qUserInfoRole.id.ne(111l))
////                .fetch();
//        return userInfoRoleList1;
//
//    }

//
//    public List<Territory> searchWithEmployee(TerritorySearchDto territorySearchDto) {
//        final QDivision qDivision = QDivision.division;
//        final QDistrict qDistrict = QDistrict.district;
//        final QUpozila qUpozila = QUpozila.upozila;
//
////        BooleanBuilder bb = new BooleanBuilder();
////        if (Objects.nonNull(territorySearchDto.getName())) {
////            bb.and(qUpozila.name.containsIgnoreCase(territorySearchDto.getName()));  // like '% %'
////        }
//
//
//        final JPAQuery<Territory> query = new JPAQuery<>(entityManager);
//        List<Territory> upozilaList = query.from(qUpozila)
//                .leftJoin(qUpozila.district, qDistrict).fetchJoin()
//                .leftJoin(qDistrict.division, qDivision).fetchJoin()
//              //  .where(bb)
//                .fetch();
//        return upozilaList;
//    }
}
