package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String code;
    private int price;
    private String description;
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetailList;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userInfo_id")
    private UserInfo userInfo;

    public Product(Long id) {
        this.id = id;
    }
}



// id ,  name
// 1     apple
// 2     orange
// 3     mango
// 4     grape