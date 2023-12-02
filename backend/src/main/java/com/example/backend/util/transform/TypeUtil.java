package com.example.backend.util.transform;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class TypeUtil {

  private static final Map<Class<?>, Class<?>> wrapperTypeMap =
    new HashMap<>() {{
      put(Integer.class, int.class);
      put(Byte.class, byte.class);
      put(Character.class, char.class);
      put(Boolean.class, boolean.class);
      put(Double.class, double.class);
      put(Float.class, float.class);
      put(Long.class, long.class);
      put(Short.class, short.class);
      put(Void.class, void.class);
    }};


  public static boolean isWrapperType(Object obj) {
    //System.out.println(o.getClass().getName());
    return wrapperTypeMap.containsKey(obj.getClass());
  }

  public static boolean isPrimitiveType(Object obj) {
    //System.out.println(o.getClass().getName());
    return wrapperTypeMap.containsKey(obj.getClass());
  }

  public static boolean isStringType(Object obj) {
    //System.out.println(o.getClass().getName());
    return String.class.equals(obj.getClass());
  }

  public static boolean isEnumType(Object obj) {
    return true;
  }
  public static boolean isLocalDateTimeType(Object obj) {
    return true;
  }
  public static boolean isLocalDateType(Object obj) {
    return true;
  }
  public static boolean isLocalTimeType(Object obj) {
    return true;
  }

  public static boolean isCollectionType(Object obj) {
    return obj instanceof Collection<?> || obj instanceof Map<?, ?>;
    //return Collection.class.isAssignableFrom(c) || Map.class.isAssignableFrom(c);
  }

  public static boolean isJavaLang(Class<?> clazz) {
    //var t =obj.getClass().getName();
    //return t.startsWith("java.lang") || t.startsWith("javax")
    // || t.startsWith("com.sun")  || t.startsWith("com.oracle");
    Package p = clazz.getClass().getPackage();
    if (p == null) // default package is package for users classes
      return false;
    String title = p.getImplementationTitle();
    if (title == null)// no title -> class not from Oracle
      return false;
    return title.equals("Java Runtime Environment");
  }

  public static boolean isEntity(Class<?> clazz, String packageName) {
    //by package name
    return true;
  }


}
