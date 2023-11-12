package com.example.backend.service;


import com.example.backend.entity.UserInfoRole;
import com.example.backend.repository.UserInfoRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoRoleService {

  @Autowired
  private UserInfoRoleRepository userInfoRoleRepository;

  public List<UserInfoRole> search() {
    List<UserInfoRole> userInfoRoleList = this.userInfoRoleRepository.findAll();
    List<UserInfoRole> userInfoRoleList2 = userInfoRoleList.stream().map((e) -> {
      e.setUserInfo(null);
      e.setRole(null);
      return e;
    }).toList();
    return userInfoRoleList2;
  }
}
