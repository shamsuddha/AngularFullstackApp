package com.example.backend.service;


import com.example.backend.entity.QRole;
import com.example.backend.entity.QUserInfo;
import com.example.backend.entity.QUserInfoRole;
import com.example.backend.entity.UserInfoRole;
import com.example.backend.repository.UserInfoRoleRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserInfoRoleService {

  private final EntityManager entityManager;

  private final UserInfoRoleRepository userInfoRoleRepository;

  public List<UserInfoRole> search() {
    List<UserInfoRole> userInfoRoleList = this.userInfoRoleRepository.findAll();
    List<UserInfoRole> userInfoRoleList2 = userInfoRoleList.stream().map((e) -> {
      e.setUserInfo(null);
      e.setRole(null);
      return e;
    }).toList();
    return userInfoRoleList2;
  }

  public List<UserInfoRole> searchWithUserInfoRole() {

    final QUserInfoRole qUserInfoRole = QUserInfoRole.userInfoRole;
    final QUserInfo qUserInfo = QUserInfo.userInfo;
    final QRole qRole = QRole.role;

    final JPAQuery<UserInfoRole> query = new JPAQuery<>(entityManager);

    List<UserInfoRole> userInfoRoleList = query.from(qUserInfoRole)
      .leftJoin(qUserInfoRole.userInfo, qUserInfo).fetchJoin()
      .leftJoin(qUserInfoRole.role, qRole).fetchJoin()
      .fetch();

    List<UserInfoRole> userInfoRoleList2 = userInfoRoleList.stream().map(e->{
      e.getUserInfo().setUserInfoRoleList(List.of());
      e.getRole().setUserInfoRoleList(List.of());
      return e;
    }).toList();
    return userInfoRoleList2;

  }

  /*
  select * from user_info_role
  left join user_info on user_info_role.user_info_id = user_info.id
  left join role on user_info_role.role_id = role.id
  */

/*
  {
    id: 1
    userInfo:{

    },
    role:{

    }
  }
  */

}
