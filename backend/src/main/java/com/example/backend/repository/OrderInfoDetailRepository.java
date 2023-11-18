package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.OrderInfoDetail;

public interface OrderInfoDetailRepository extends JpaRepository<OrderInfoDetail, Long> {
}