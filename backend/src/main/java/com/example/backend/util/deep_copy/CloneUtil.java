package com.example.backend.util.deep_copy;


import com.fasterxml.jackson.databind.ObjectMapper;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

// removing circular mapping
public class CloneUtil {

  public static <T> T deepCopy(T model, Class<T> tClass) throws Exception {
    final ObjectMapper objectMapper = new ObjectMapper();
    final byte[] bytes = objectMapper.writeValueAsBytes(model);
    final T copy = objectMapper.readValue(bytes, tClass);
    return copy;
  }

  public static <X> List<X> copyList(List<X> list) {
    return (List<X>) list.parallelStream().map(e -> copyObject(e)).collect(Collectors.toList());
  }



  //todo set null for null value
  public static Object copyObject(Object object) {
    try {
      Object clone = object.getClass().newInstance();

      for (Field field : object.getClass().getDeclaredFields()) {
        field.setAccessible(true);

        if (field.get(object) == null || Modifier.isFinal(field.getModifiers())) {
          continue;
        }

        if (field.getType().isPrimitive() || field.getType().equals(String.class)
          || field.getType().getSuperclass().equals(Number.class) || field.getType().equals(Boolean.class)) {
          field.set(clone, field.get(object));
        } else if (Collection.class.isAssignableFrom(field.getType())) {
          field.set(clone, List.of());
        } else {
          field.set(clone, copyObject(field.get(object)));
        }
      }
      return clone;
    } catch (Exception e) {
      return null;
    }
  }
}
