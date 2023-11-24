package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.entity.Category;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.service.CategoryService;
import jakarta.websocket.server.PathParam;
@RestController
@RequestMapping("/category")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;
  @Autowired
  private CategoryRepository categoryRepository;

  @PostMapping(value = "/save")
  public @ResponseBody ResponseEntity<?> save(@RequestBody Category category) {
    return new ResponseEntity<>(this.categoryRepository.save(category), HttpStatus.OK);
  }

  @PutMapping(value = "/update")
  public @ResponseBody ResponseEntity<?> update(@RequestBody Category category) {
    return new ResponseEntity<>(this.categoryRepository.save(category), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete")
  public @ResponseBody ResponseEntity<?> delete(@RequestBody Category category) {
    this.categoryRepository.delete(category);
    return new ResponseEntity<>(true, HttpStatus.OK);
  }

  @PostMapping(value = "/search")
  public @ResponseBody ResponseEntity<?> search() {
    return new ResponseEntity<>(this.categoryService.search(), HttpStatus.OK);
  }
}
