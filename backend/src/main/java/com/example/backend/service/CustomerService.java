package com.example.backend.service;

import com.example.backend.controller.search_dto.CustomerSearchDto;
import com.example.backend.entity.*;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.repository.DistrictRepository;
import com.example.backend.repository.UpozilaRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

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
    public List<OrderInfo> searchWithOrderWithOrderDetail(CustomerSearchDto customerSearchDto) {
        final QCustomer qCustomer = QCustomer.customer;
        final QOrderInfo qOrderInfo = QOrderInfo.orderInfo;
        final QOrderInfoDetail qOrderInfoDetail = QOrderInfoDetail.orderInfoDetail;

        BooleanBuilder bb = new BooleanBuilder();

        if (Objects.nonNull(customerSearchDto.getCustomerId())) {
            bb.and(qCustomer.id.in(customerSearchDto.getCustomerId()));
           // bb.and(qCustomer.id.eq(""));
        }
        if (Objects.nonNull(customerSearchDto.getOrderInfoId())) {
            bb.and(qOrderInfo.id.eq(customerSearchDto.getOrderInfoId()));
        }
        if (Objects.nonNull(customerSearchDto.getOrderInfoDetailId())) {
            bb.and(qOrderInfoDetail.id.eq(customerSearchDto.getOrderInfoDetailId()));
        }

//        select * from customer
//        left join orderinfo
//        on orderinfo.customer_id = customer.id
//        left join orderinfodetail
//        on orderinfodetail.orderinfo_id = orderinfo.id;

        final JPAQuery<OrderInfo> query = new JPAQuery<>(entityManager);
        List<OrderInfo> orderInfoDetailList = query.from(qOrderInfoDetail)
                .leftJoin(qOrderInfoDetail.orderInfo, qOrderInfo).fetchJoin()
                //.leftJoin(qOrderInfo.customer, qCustomer).fetchJoin()
                .where(bb)
                .fetch();
        return orderInfoDetailList;
    }
}
