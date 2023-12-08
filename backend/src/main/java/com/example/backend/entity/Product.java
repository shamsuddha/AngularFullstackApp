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
    private String productName;
    private String productCode;
    private Integer unitPrice;
    private Integer unitsInStock;
    private Integer unitsOnOrder;
    private String description;
    private String coverImage;
    private String galleryImage1;
    private String galleryImage2;
    private String galleryImage3;

    // PRODUCT MANY TO ONE CATEGORY
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    // PRODUCT MANY TO ONE USER INFO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    // PRODUCT MANY TO ONE USER INFO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userInfo_id")
    private UserInfo userInfo;

    // PRODUCT MANY TO ONE SUPPLIER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    public Product(Long id) {
        this.id = id;
    }
}

// id ,  name\
// 1     apple
// 2     orange
// 3     mango
// 4     grape