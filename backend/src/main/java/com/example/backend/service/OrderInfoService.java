package com.example.backend.service;

import com.example.backend.entity.OrderInfo;
import com.example.backend.repository.OrderInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
public class OrderInfoService {

    @Autowired
    private OrderInfoRepository orderInfoRepository;

    public List<OrderInfo> search() {
        List<OrderInfo> orderInfoList = this.orderInfoRepository.findAll();
        List<OrderInfo> orderInfoList2 = orderInfoList.stream().map((e) -> {
            e.setOrderInfoDetailList(List.of());
           // e.setOrganization(null);
            return e;
        }).toList();
        return orderInfoList2;
    }
}
