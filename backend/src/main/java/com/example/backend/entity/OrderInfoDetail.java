package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderInfoDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ORDER INFO DETAIL MANY TO ONE ORDER INFO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orderInfo_id")
    private OrderInfo orderInfo;
    @Column(name = "orderInfo_id", insertable = false, updatable = false)
    private Long orderInfoId;

    // ORDER INFO DETAIL MANY TO ONE PRODUCT
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "product_id", insertable = false, updatable = false)
    private Long productId;
    private Double unit_price;
    private Double quantity;
    private Double discount;

    public OrderInfoDetail(Long id) {
        this.id = id;
    }
}

// id ,  quantity , product(fk) , order_id(fk)
// 1     1.5              1         1
// 2     2.3              2         1
// 3     5.4              3         2
// 4     3.2              4         2