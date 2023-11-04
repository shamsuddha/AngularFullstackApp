package com.example.backend.model;

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
public class Leave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int emergencyContact;
    private Date startDate;
    private Date endDate;
    private int durationOfLeave;
    private String causeOfLeave;
    private Boolean leaveStatus;

    public Leave(Long id) {
        this.id = id;
    }

}
