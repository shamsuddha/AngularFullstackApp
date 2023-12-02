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
@AllArgsConstructor
@NoArgsConstructor
public class Division {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    // DIVISION ONE TO MANY DISTRICT
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "division", fetch = FetchType.LAZY)
    private List<District> districtList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<District> districtListSerde = new ArrayList<>();

    // DIVISION ONE TO MANY EMPLOYEE
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "division", fetch = FetchType.LAZY)
    private List<Employee> employeeList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Employee> employeeListSerde = new ArrayList<>();


    public Division(Long id) {
        this.id = id;
    }
}