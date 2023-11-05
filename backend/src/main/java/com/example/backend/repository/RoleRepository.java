package com.example.backend.repository;

import com.example.backend.entiry.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}