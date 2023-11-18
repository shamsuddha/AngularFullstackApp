package com.example.backend.util.serde;

import com.example.backend.entity.UserInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

public class CustomSerDe {


  public ObjectMapper mapping(){

    ObjectMapper mapper = new ObjectMapper();
    SimpleModule simpleModule = new SimpleModule();
    simpleModule.addSerializer(UserInfo.class, new UserInfoSerialize());
    //simpleModule.addDeserializer(Person.class, new CustomDeserializer());
    mapper.registerModule(simpleModule);
    return mapper;
  }
}
