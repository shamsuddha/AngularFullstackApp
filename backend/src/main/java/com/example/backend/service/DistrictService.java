package com.example.backend.service;

import com.example.backend.entity.*;
import com.example.backend.repository.DistrictRepository;
import com.example.backend.repository.UpozilaRepository;
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
public class DistrictService {

    private final EntityManager entityManager;
    @Autowired
    private DistrictRepository districtRepository;
    @Autowired
    private UpozilaRepository upozilaRepository;
    public List<District> search() {
        return this.districtRepository.findAll();
    }

    public District saveWithUpozila(District district) {
        district.getUpozilaList().forEach(e->System.out.println("from prop "+e.getName()));
        district.getUpozilaListSerde().forEach(e->System.out.println("from serde "+e.getName()));
        District districtSaved = this.districtRepository.save(district);
        List<Upozila> upozilaList = district.getUpozilaList().stream().map(e -> {
            e.setDistrict(new District(districtSaved.getId()));
            return e;
        }).toList();
        List<Upozila> upozilaListSaved = this.upozilaRepository.saveAll(upozilaList);
        districtSaved.setUpozilaListSerde(upozilaListSaved);
        return districtSaved;
    }
}
