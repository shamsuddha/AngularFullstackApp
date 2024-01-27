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
public class Territory extends AuditLog {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String territory_description;
        // TERRITORY MANY TO ONE REGION
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "region_id")
        private Region region;



}
