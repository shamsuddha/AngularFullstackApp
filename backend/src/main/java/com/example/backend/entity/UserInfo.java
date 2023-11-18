package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UserInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
  private Integer mobile;

  //@JsonSerialize(using = ListSerialize.class)
  @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
  private List<UserInfoRole> userInfoRoleList;


  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "organization")
  private Organization organization;


  // @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
  // private List<Product> productList;

  // @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
  // private List<OrderInfo> orderInfoList;

  public UserInfo(Long id) {
    this.id = id;
  }

}
