package com.example.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {
  
}
