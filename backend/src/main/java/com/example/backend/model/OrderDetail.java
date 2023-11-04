package com.example.backend.model;
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
public class OrderDetail {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private int amount;
        private int price;
        @ManyToOne (fetch = FetchType.LAZY)
        @JoinColumn(name="order_id")
        private Order order;

        public OrderDetail(Long id) {
                this.id = id;
        }

}
