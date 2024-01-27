package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
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
public class Product extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String product_name;

    // PRODUCT MANY TO ONE SUPPLIER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    // PRODUCT MANY TO ONE CATEGORY
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
    private String quantity_per_unit; // string or DOUBLE???
    private Double unit_price;
    private Double unit_in_stock;
    private Double unit_on_order;
    private Integer reorder_level;
    private Integer discontinued;

    // PRODUCT MANY TO ONE USER INFO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userInfo_id")
    private UserInfo userInfo;

    public Product(Long id) {
        this.id = id;
    }
}

// id ,  name\
// 1     apple
// 2     orange
// 3     mango
// 4     grape