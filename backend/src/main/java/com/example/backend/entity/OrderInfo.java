package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String code;
  private String receiverAddress;
  private Integer extraContactNumber;

  @JsonIgnore
  @OneToMany(mappedBy = "orderInfo", fetch = FetchType.LAZY)
  private List<OrderInfoDetail> orderInfoDetailList = new ArrayList<>();
  
  @Transient
  private List<OrderInfoDetail> orderInfoDetailListForSerde = new ArrayList<>();

  // @ManyToOne(fetch = FetchType.LAZY)
  // @JoinColumn(name = "userInfo_id")
  // private UserInfo userInfo;

  public OrderInfo(Long id) {
    this.id = id;
  }

}

// id , code , user_id(fk)
// 1 OR001 , 1
// 2 OR002 , 2
