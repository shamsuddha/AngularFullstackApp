package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.sql.ast.tree.expression.Distinct;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Upozila {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    // UPOZILA MANY TO ONE DISTRICT
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id")
    private District district;
    @Column(name = "district_id", insertable = false, updatable = false)
    private Long districtId;

    // UPOZILA ONE TO MANY EMPLOYEE
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "upozila", fetch = FetchType.LAZY)
    private List<Employee> employeeList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Employee> employeeListSerde = new ArrayList<>();

    public Upozila(Long id) {
        this.id = id;
    }
}