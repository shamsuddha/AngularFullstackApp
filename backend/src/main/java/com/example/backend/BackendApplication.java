package com.example.backend;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate6.Hibernate6Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@SpringBootApplication
public class BackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @Bean
  WebMvcConfigurer webMvcConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
          .allowedOrigins("*")
          .allowedMethods("GET", "POST", "PUT", "DELETE");
      }
    };
  }

  @Bean
  public MappingJackson2HttpMessageConverter jacksonMessageConverter() {
    MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);  // request => from json to object/entity
    objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);  // response => from object/entity to json
    objectMapper.registerModule(new Hibernate6Module()); //Registering Hibernate6Module to support lazy objects
    messageConverter.setObjectMapper(objectMapper);
    return messageConverter;
  }

}
