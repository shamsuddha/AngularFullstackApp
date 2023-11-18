package com.example.backend.util.serde;


import com.example.backend.entity.UserInfo;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;
import java.util.List;

public class UserInfoRoleListDeserialize extends JsonDeserializer<List<UserInfo>> {


  @Override
  public List<UserInfo> deserialize(JsonParser p, DeserializationContext ctx) {

    try {
      System.out.println(p);
      System.out.println(p.getDoubleValue());
      return List.of();
    } catch (JsonProcessingException jpe) {
      return List.of();
    } catch (IOException ioe) {
      System.out.println(ioe.getMessage());
      return List.of();
    } catch (RuntimeException re) {
      System.out.println(re.getMessage());
      return List.of();
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return List.of();
    }
  }

}