package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
  private Integer mobile;
//
//  @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
//  private List<Product> productList;
//
//  @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
//  private List<OrderInfo> orderInfoList;
//
//  @ManyToOne(fetch = FetchType.LAZY)
//  @JoinColumn(name = "role_id")
//  private Role role;


  public UserInfo(Long id) {
    this.id = id;
  }

}
