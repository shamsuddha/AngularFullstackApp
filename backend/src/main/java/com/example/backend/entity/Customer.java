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
@NoArgsConstructor
@AllArgsConstructor
public class Customer{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company_name;
    private String customer_name;
    private String contact_title;
    private String address;
    private String city;
    private String region;
    private String postal_code;
    private String country;
    private String phone;
    private String fax;

    // CUSTOMER ONE TO MANY ORDER INFO
    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<OrderInfo> orderInfoList = new ArrayList<>();
    @Transient
    private List<OrderInfo> orderInfoListSerde = new ArrayList<>();

    // CUSTOMER HAS MANY CUSTOMER DEMOGRAPHY
    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<CustomerDemography> customerDemographyList = new ArrayList<>();
    @Transient
    private List<CustomerDemography> customerDemographyListSerde = new ArrayList<>();

    public Customer(Long id)
    {
        this.id = id;
    }
}
