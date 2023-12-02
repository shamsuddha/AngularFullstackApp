package com.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.repository.OrderInfoDetailRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
public class OrderInfoDetailService {

    @Autowired
    private OrderInfoDetailRepository orderInfoDetailRepository;

}