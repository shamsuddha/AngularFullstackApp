package com.example.backend.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo extends AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer mobile;
    //@JsonSerialize(using = ListSerialize.class)
    // USER INFO ONE TO MANY USER INFO ROLE
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
    private List<UserInfoRole> userInfoRoleList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<UserInfoRole> userInfoRoleListSerde = new ArrayList<>();

    // USER INFO ONE TO MANY POST
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
    private List<Post> postList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Post> postListSerde = new ArrayList<>();

    // USER INFO ONE TO MANY COMMENT
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
    private List<Comment> commentList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Comment> commentListSerde = new ArrayList<>();

    // USER INFO ONE TO MANY PRODUCT
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "userInfo", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Product> productListSerde = new ArrayList<>();

    public UserInfo(Long id) {
        this.id = id;
    }

}
