package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Employee extends JpaRepository<Employee, Long> {
}
