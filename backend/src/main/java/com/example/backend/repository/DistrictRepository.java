package com.example.backend.repository;

import com.example.backend.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictRepository extends JpaRepository<District, Long> {
}
