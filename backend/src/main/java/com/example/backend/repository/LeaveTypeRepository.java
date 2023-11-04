package com.example.backend.repository;

import com.example.backend.model.Comment;
import com.example.backend.model.LeaveType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveTypeRepository extends JpaRepository<LeaveType, Long> {
}
