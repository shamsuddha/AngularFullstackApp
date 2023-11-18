package com.example.backend.util.serde;

import com.example.backend.entity.UserInfo;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.List;

public class UserInfoSerialize extends JsonSerializer<UserInfo> {


  @Override
  public void serialize(UserInfo userInfo,
                        JsonGenerator jgen,
                        SerializerProvider serializerProvider) throws IOException {

        jgen.writeStartObject();

        jgen.writeEndObject();

  }
}