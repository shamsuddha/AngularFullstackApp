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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    // DISTRICT MANY TO ONE DIVISION
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "division_id")
    private Division division;
    @Column(name = "division_id", insertable = false, updatable = false)
    private Long divisionId;
    // DISTRICT ONE TO MANY UPOZILA
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    private List<Upozila> upozilaList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Upozila> upozilaListSerde = new ArrayList<>();
    // DISTRICT ONE TO MANY EMPLOYEE
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    private List<Employee> employeeList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Employee> employeeListSerde = new ArrayList<>();

    public District(Long id) {
        this.id = id;
    }
}