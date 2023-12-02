package com.example.backend.util.transform;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class SwallowCopyUtil {



  public static <T> T swallowCopy(T entity) throws IllegalAccessException, InstantiationException {
    Class<?> clazz = entity.getClass();
    T newEntity = (T) entity.getClass().newInstance();
    while (clazz != null) {
      copyFields(entity, newEntity, clazz);
      clazz = clazz.getSuperclass();
    }
    return newEntity;
  }

  public static <T> T copyFields(T entity, T newEntity, Class<?> clazz) throws IllegalAccessException {
    List<Field> fields = new ArrayList<>();
    for (Field field : clazz.getDeclaredFields()) {
      fields.add(field);
    }
    for (Field field : fields) {
      field.setAccessible(true);
      var val = field.get(entity);
      if (Objects.isNull(val)) {
        field.set(newEntity, null);
      } else if (TypeUtil.isWrapperType(val) || TypeUtil.isPrimitiveType(val)
        || TypeUtil.isStringType(val)) {
        field.set(newEntity, val);
        //System.out.println("EQ"+field.getName() + ":"+field.get(entity));
      } else {
        //System.out.println("NE"+field.getName() + ":"+field.get(entity));
      }
    }
    return newEntity;
  }

  /**
   * Primitive type, Wrapper type, LocalDate, LocalTime, LocalDateTime, Enum
   * No object or collection
   */
  public static <T> T swallowCopy2(T x, Class<T> clazz) {
    if (Objects.isNull(x)) {
      return null;
    }
    try {
      T t = clazz.newInstance();
      clazz.getClass().getDeclaredFields();
      for (Field f : clazz.getDeclaredFields()) {
      }
      return t;
    } catch (InstantiationException e) {
      e.printStackTrace();
      throw new RuntimeException("InstantiationException");
    } catch (IllegalAccessException e) {
      e.printStackTrace();
      throw new RuntimeException("IllegalAccessException");
    }
  }

}
