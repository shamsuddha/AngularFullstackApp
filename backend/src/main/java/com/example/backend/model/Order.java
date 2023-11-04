package com.example.backend.model;
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
public class Order {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String receiverAddress;
        private int extraContactNumber;
        @OneToMany(mappedBy = "order", fetch = FetchType.LAZY )
        private List<OrderDetail> orderDetailList;


        public Order(Long id) {
                this.id = id;
        }

}
