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
public class Comment extends AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String body;

    // COMMENT MANY TO ONE USER INFO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userInfo_id")
    private UserInfo userInfo;

    // COMMENT MANY TO ONE POST
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    public Comment(Long id) {
        this.id = id;
    }
}
