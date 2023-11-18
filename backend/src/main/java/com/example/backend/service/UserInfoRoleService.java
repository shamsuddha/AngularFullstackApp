package com.example.backend.service;


import com.example.backend.entity.*;
import com.example.backend.repository.UserInfoRoleRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserInfoRoleService {

  private final EntityManager entityManager;

  private final UserInfoRoleRepository userInfoRoleRepository;

  public Object update(UserInfoRole userInfoRole) {
    UserInfoRole userInfoRoleUpdated = this.userInfoRoleRepository.save(userInfoRole);
    userInfoRoleUpdated.setUserInfo(null);
    userInfoRoleUpdated.setRole(null);
    return userInfoRoleUpdated;
  }

  public List<UserInfoRole> search() {
    return this.userInfoRoleRepository.findAll();
  }

  @Transactional
  public List<UserInfoRole> searchWithUserInfoRole() {

    final QUserInfoRole qUserInfoRole = QUserInfoRole.userInfoRole;
    final QUserInfo qUserInfo = QUserInfo.userInfo;
    final QRole qRole = QRole.role;

    final JPAQuery<UserInfoRole> query = new JPAQuery<>(entityManager);

    List<UserInfoRole> userInfoRoleList1 = query.from(qUserInfoRole)
      .leftJoin(qUserInfoRole.userInfo, qUserInfo).fetchJoin()
      .leftJoin(qUserInfoRole.role, qRole).fetchJoin()
      .where(qUserInfoRole.id.ne(111l))
      .fetch();
    return userInfoRoleList1;
  }

}
