package com.example.backend.service;

import com.example.backend.controller.search_dto.UpozilaSearchDto;
import com.example.backend.entity.*;
import com.example.backend.repository.UpozilaRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Objects;

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

  public List<Upozila> searchWithDistrict(UpozilaSearchDto upozilaSearchDto) {
    final QDistrict qDistrict = QDistrict.district;
    final QUpozila qUpozila = QUpozila.upozila;

    BooleanBuilder bb = new BooleanBuilder();
    if (Objects.nonNull(upozilaSearchDto.getName())) {
      bb.and(qUpozila.name.containsIgnoreCase(upozilaSearchDto.getName()));  // like '% %'
    }
    if (Objects.nonNull(upozilaSearchDto.getDistrictId())) {
      bb.and(qUpozila.districtId.eq(upozilaSearchDto.getDistrictId()));
    }

    final JPAQuery<Upozila> query = new JPAQuery<>(entityManager);
    List<Upozila> upozilaList = query.from(qUpozila)
      .leftJoin(qUpozila.district, qDistrict).fetchJoin()
      .where(bb)
      .fetch();
    return upozilaList;
  }

  public List<Upozila> searchWithDistrictWithDivision(UpozilaSearchDto upozilaSearchDto) {
    final QDivision qDivision = QDivision.division;
    final QDistrict qDistrict = QDistrict.district;
    final QUpozila qUpozila = QUpozila.upozila;

    BooleanBuilder bb = new BooleanBuilder();
    if (Objects.nonNull(upozilaSearchDto.getName())) {
      bb.and(qUpozila.name.containsIgnoreCase(upozilaSearchDto.getName()));  // like '% %'
    }
    if (Objects.nonNull(upozilaSearchDto.getDistrictId())) {
      bb.and(qUpozila.districtId.eq(upozilaSearchDto.getDistrictId()));
    }
    if (Objects.nonNull(upozilaSearchDto.getDivisionId())) {
      bb.and(qDistrict.division.id.eq(upozilaSearchDto.getDivisionId()));
    }

    final JPAQuery<Upozila> query = new JPAQuery<>(entityManager);
    List<Upozila> upozilaList = query.from(qUpozila)
      .leftJoin(qUpozila.district, qDistrict).fetchJoin()
      .leftJoin(qDistrict.division, qDivision).fetchJoin()
      .where(bb)
      .fetch();
    return upozilaList;
  }
}
