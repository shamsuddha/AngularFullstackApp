package com.example.backend.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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
    //  @JsonSerialize(using = ListSerialize.class)
    //  @JsonIgnore
    //  @JsonSerialize
    //  @JsonDeserialize

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "floor", fetch = FetchType.LAZY)
    private List<Room> roomList = new ArrayList<>();

    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Room> roomListSerde = new ArrayList<>();

    public Floor(Long id) {
        this.id = id;
    }
}
