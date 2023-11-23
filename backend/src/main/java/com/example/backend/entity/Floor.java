package com.example.backend.entity;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Floor extends AuditLog {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String code;
  // @JsonSerialize(using = ListSerialize.class)
  @JsonIgnore
  @OneToMany(mappedBy = "floor", fetch = FetchType.LAZY)
  private List<Room> roomList = new ArrayList<>();

  public Floor(Long id) {
    this.id = id;
  }
}
