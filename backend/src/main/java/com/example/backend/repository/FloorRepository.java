package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.Floor;

public interface FloorRepository extends JpaRepository<Floor, Long> {
  
}
