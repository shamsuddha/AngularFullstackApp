package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderInfoDetail extends AuditLog{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Integer amount;
  private Integer price;
  private Double quantity;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "orderInfo_id")
  private OrderInfo orderInfo;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id")
  private Product product;

  public OrderInfoDetail(Long id) {
    this.id = id;
  }
}

// id ,  quantity , product(fk) , order_id(fk)
// 1     1.5              1         1
// 2     2.3              2         1
// 3     5.4              3         2
// 4     3.2              4         2