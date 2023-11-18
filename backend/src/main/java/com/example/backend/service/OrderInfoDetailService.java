package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.repository.OrderInfoDetailRepository;

import java.util.List;
@Service
public class OrderInfoDetailService {

    @Autowired
    private OrderInfoDetailRepository orderInfoDetailRepository;

}