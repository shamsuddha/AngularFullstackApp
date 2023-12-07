package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

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
    private String lastName;
    private String firstName;
    private String title;
    private Date birthDate;
    private Date hireDate;
    private Date resignDate;
    private String country;
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
    private String address;
    private String postalCode;
    private String homePhone;
    private String extension;
    private String photo;

    public Employee(Long id) {
        this.id = id;
    }
}
