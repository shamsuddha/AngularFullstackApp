package com.example.backend.repository;
import com.example.backend.entiry.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Long> {
  
}
