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
  // ORDER INFO MANY TO ONE CUSTOMER
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "customer_id")
  private Customer customer;

  // ORDER INFO MANY TO ONE Employee
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "employee_id")
  private Employee employee;

  private Date order_date;
  private Date required_date;
  private Date shipped_date;
  private Integer ship_via;
  private Integer freight;
  private String ship_name;
  private String ship_address;
  private String ship_city;
  private String ship_region;
  private String ship_postal_code;
  private String ship_country;

  // ORDER INFO ONE TO MANY ORDER INFO DETAIL
  @JsonIgnore
  @OneToMany(mappedBy = "orderInfo", fetch = FetchType.LAZY)
  private List<OrderInfoDetail> orderInfoDetailList = new ArrayList<>();
  @Transient
  private List<OrderInfoDetail> orderInfoDetailListSerde = new ArrayList<>();

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
