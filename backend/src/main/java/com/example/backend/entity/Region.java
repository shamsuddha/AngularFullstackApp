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
public class Region extends AuditLog {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String region_description;

        // REGION ONE TO MANY TERRITORY
        @JsonIgnore
        @OneToMany(mappedBy = "region", fetch = FetchType.LAZY)
        private List<Territory> territoryList = new ArrayList<>();
        @Transient
        private List<Territory> territoryListSerde = new ArrayList<>();


    public Region(Long id) {
            this.id = id;
        }
    }

