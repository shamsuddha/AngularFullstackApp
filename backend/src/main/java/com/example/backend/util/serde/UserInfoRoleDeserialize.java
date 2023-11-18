package com.example.backend.util.serde;


import com.example.backend.entity.UserInfo;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class UserInfoRoleDeserialize extends JsonDeserializer<UserInfo> {


  @Override
  public UserInfo deserialize(JsonParser p, DeserializationContext ctx){

    try {
      System.out.println(p.getDoubleValue());
      return null;
    } catch (JsonProcessingException jpe) {
      return  null;
    } catch (IOException e) {
      return  null;
    }
  }

}