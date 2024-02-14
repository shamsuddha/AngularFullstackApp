package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoRole extends AuditLog {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  // USER INFO ROLE MANY TO ONE USER INFO
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "userInfo_id")
  private UserInfo userInfo;
  @Column(name = "userInfo_id", insertable = false, updatable = false)
  private Long userInfoId;

  // USER INFO ROLE MANY TO ONE ROLE
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "role_id")
  private Role role;
  @Column(name = "role_id", insertable = false, updatable = false)
  private Long roleId;

  public UserInfoRole(Long id){
    this.id = id;
  }
}
