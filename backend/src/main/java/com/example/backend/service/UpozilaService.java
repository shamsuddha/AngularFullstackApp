package com.example.backend.service;

import com.example.backend.entity.Upozila;
import com.example.backend.repository.UpozilaRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class UpozilaService {

    private final EntityManager entityManager;
    @Autowired
    private UpozilaRepository upozilaRepository;
    public List<Upozila> search() {
        return this.upozilaRepository.findAll();
    }
}
