package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Room extends AuditLog {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String code;

  // ROOM MANY TO ONE FLOOR
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "floor_id")
  private Floor floor;

  @Column(name = "floor_id", insertable = false, updatable = false)
  private Long floorId;

  public Room(Long id) {
    this.id = id;
  }
}
