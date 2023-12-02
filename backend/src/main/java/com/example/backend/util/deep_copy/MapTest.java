package com.example.backend.util.deep_copy;

import com.example.backend.entity.UserInfoRole;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;

import java.util.List;

public class MapTest {

  public String mappingTest(List<UserInfoRole> userInfoRoleList) {
    //var userInfoRoleList2 = CloneUtil.copyList(userInfoRoleList);
    ObjectMapper objectMapper = new JsonMapper();
    try {
      String str = objectMapper.writeValueAsString(userInfoRoleList);
      System.out.println(str);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
    return "";
  }

}
