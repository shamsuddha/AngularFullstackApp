package com.example.backend.entity;

import java.util.List;

import org.springframework.data.util.Lazy;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Brand{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String mobile;
    private String email;

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private List<Category> categoryList;

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private List<Category> categoryList;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")


  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id")
  private Product product;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id")
  private Product product;





    public Brand(Long id)
    {
        this.id = id;
    }




}