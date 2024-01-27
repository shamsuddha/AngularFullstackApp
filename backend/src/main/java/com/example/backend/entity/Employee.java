package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Employee extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String last_name;
    private String first_name;
    private String title;
    private String title_of_courtesy;
    private Date birth_date;
    private Date hire_date;
    private String address;
    private String city;
    private String region;
    private String postal_code;
    private String country;
    private String home_phone;
    private String extension;
    // photo and photo path bujte pari nai
    private String photo;
    private String notes;
    private Integer reports_to;
    private String photo_path;

    // employee ONE TO MANY ORDER INFO
    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    private List<OrderInfo> orderInfoList = new ArrayList<>();
    @Transient
    private List<OrderInfo> orderInfoListSerde = new ArrayList<>();

    // employee ONE TO MANY employee territory
    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    private List<EmployeeTerritory> employeeTerritoryList = new ArrayList<>();
    @Transient
    private List<EmployeeTerritory> employeeTerritoryListSerde = new ArrayList<>();


    // EMPLOYEE MANY TO ONE DIVISION
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "division_id")
    private Division division;
    @Column(name = "division_id", insertable = false, updatable = false)
    private Long divisionId;

    // EMPLOYEE MANY TO ONE DISTRICT
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id")
    private District district;
    @Column(name = "district_id", insertable = false, updatable = false)
    private Long districtId;

    // EMPLOYEE MANY TO ONE UPOZILA
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "upozila_id")
    private Upozila upozila;
    @Column(name = "upozila_id", insertable = false, updatable = false)
    private Long upozilaId;


    public Employee(Long id) {
        this.id = id;
    }
}
