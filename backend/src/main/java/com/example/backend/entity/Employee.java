package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Employee extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String lastName;
    private String firstName;
    private String title;
    private Date birthDate;
    private String city;
    private String region;
    private String postalCode;
    private String country;
    private String homePhone;
    private String photo;

    public Employee(Long id) {
        this.id = id;
    }
}
