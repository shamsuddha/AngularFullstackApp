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
public class Shipper extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company_name;
    private String phone;
    // SHIPPER ONE TO MANY ORDER INFO
    @JsonIgnore
    @OneToMany(mappedBy = "shipper", fetch = FetchType.LAZY)
    private List<OrderInfo> orderInfoList = new ArrayList<>();
    @Transient
    private List<OrderInfo> orderInfoListSerde = new ArrayList<>();

    public Shipper(Long id) {
        this.id = id;
    }
}
