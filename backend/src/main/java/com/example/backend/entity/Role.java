package com.example.backend.entity;

import java.util.List;

import jakarta.persistence.*;


public class Role{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    private List<UserInfo> userInfoList;

    
    



}