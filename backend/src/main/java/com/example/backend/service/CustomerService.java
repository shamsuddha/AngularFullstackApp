package com.example.backend.service;

import com.example.backend.controller.search_dto.CustomerSearchDto;
import com.example.backend.entity.Customer;
import com.example.backend.entity.Upozila;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.repository.DistrictRepository;
import com.example.backend.repository.UpozilaRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CustomerService {

    private final EntityManager entityManager;
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> search() {
        return this.customerRepository.findAll();
    }
    public List<Customer> searchWithDistrictWithDivision(CustomerSearchDto customerSearchDto) {
        return this.customerRepository.findAll();
    }





}
