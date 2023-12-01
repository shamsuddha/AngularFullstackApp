package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderInfo extends AuditLog{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Date orderDate;
  private String shipName;
  private String shipAddress;
  private String shipCity;
  private String shipRegion;
  private String shipPostalCode;
  private String shipCountry;

  // ORDER INFO ONE TO MANY ORDER INFO DETAIL
  @JsonIgnore
  @OneToMany(mappedBy = "orderInfo", fetch = FetchType.LAZY)
  private List<OrderInfoDetail> orderInfoDetailList = new ArrayList<>();
  @Transient
  private List<OrderInfoDetail> orderInfoDetailListForSerde = new ArrayList<>();



  // ORDER INFO MANY TO ONE CUSTOMER
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "customer_id")
  private Customer customer;
  // ORDER INFO MANY TO ONE SHIPPER
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "shipper_id")
  private Shipper shipper;

  public OrderInfo(Long id) {
    this.id = id;
  }
}

// id , code , user_id(fk)
// 1 OR001 , 1
// 2 OR002 , 2
