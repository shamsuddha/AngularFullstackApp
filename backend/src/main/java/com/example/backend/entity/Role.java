package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role extends AuditLog{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    //@JsonSerialize(using = ListSerialize.class)
    @JsonIgnore
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    private List<UserInfoRole> userInfoRoleList= new ArrayList<>() ;

    @Transient
    private List<UserInfoRole> userInfoRoleListForSerde = new ArrayList<>();

    public Role(Long id) {
        this.id = id;
    }
}