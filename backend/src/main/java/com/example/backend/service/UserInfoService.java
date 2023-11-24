package com.example.backend.service;

import com.example.backend.entity.QUserInfo;
import com.example.backend.entity.QUserInfoRole;
import com.example.backend.entity.UserInfo;
import com.example.backend.repository.UserInfoRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserInfoService {

  private final EntityManager entityManager;

  @Autowired
  private UserInfoRepository userInfoRepository;

  public List<UserInfo> search() {
    return this.userInfoRepository.findAll();
  }

  public List<UserInfo> searchWithUserInfoRole() {

    final QUserInfo qUserInfo = QUserInfo.userInfo;
    final QUserInfoRole qUserInfoRole = QUserInfoRole.userInfoRole;
    final JPAQuery<UserInfo> query = new JPAQuery<>(entityManager);

    List<UserInfo> userInfoList = query.from(qUserInfo)
      .leftJoin(qUserInfo.userInfoRoleList, qUserInfoRole).fetchJoin()
      .fetch();
      
    return userInfoList;
  }
}
