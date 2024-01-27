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
public class Demography extends AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customer_desc;

    // DEMOGRAPHY ONE TO MANY CUSTOMER DEMOGRAPHY
    @JsonIgnore
    @OneToMany(mappedBy = "demography", fetch = FetchType.LAZY)
    private List<CustomerDemography> customerDemographyList = new ArrayList<>();
    @Transient
    private List<CustomerDemography> customerDemographyListSerde = new ArrayList<>();

}
