package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDemography extends AuditLog{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // CUSTOMER DEMOGRAPHY MANY TO ONE CUSTOMER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    // CUSTOMER DEMOGRAPHY MANY TO ONE DEMOGRAPHY
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demography_id")
    private Demography demography;
}
