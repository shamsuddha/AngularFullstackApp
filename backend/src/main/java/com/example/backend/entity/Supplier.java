package com.example.backend.entity;

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
@NoArgsConstructor
@AllArgsConstructor
public class Supplier extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company_name;
    private String contact_name;
    private String contact_title;
    private String address;
    private String city;
    private String region; // connection to region table
    private String postal_code;
    private String country;
    private String phone;
    private String fax;
    private String homepage;

    // SUPPLIER ONE TO MANY PRODUCT
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "supplier", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Product> productListSerde = new ArrayList<>();

    public Supplier(Long id) {
        this.id = id;
    }
}
