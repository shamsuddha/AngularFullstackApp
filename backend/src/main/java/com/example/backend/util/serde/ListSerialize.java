package com.example.backend.util.serde;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.List;

public class ListSerialize extends JsonSerializer<List<?>> {


  @Override
  public void serialize(List<?> list,
                        JsonGenerator jgen,
                        SerializerProvider serializerProvider) throws IOException {
    jgen.writeStartArray();
    try {
      for (var t : list) {
        jgen.writeStartObject();
        for (Field field : t.getClass().getDeclaredFields()) {
          field.setAccessible(true);
          jgen.writeStringField(field.getName(), field.getName());
        }
        jgen.writeEndObject();
      }
    } catch (RuntimeException re) {
      System.out.println(re.getMessage());
    }

    jgen.writeEndArray();
  }
}