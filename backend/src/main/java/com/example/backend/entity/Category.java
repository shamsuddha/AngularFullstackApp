package com.example.backend.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category extends AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category_name;
    private String description;
    private String picture;

    // CATEGORY ONE TO MANY PRODUCT
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Product> productListSerde = new ArrayList<>();

    // CATEGORY ONE TO MANY BRAND
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Brand> brandList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Brand> brandListSerde = new ArrayList<>();

    public Category(Long id) {
        this.id = id;
    }
}
