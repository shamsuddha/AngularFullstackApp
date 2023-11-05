package com.example.backend.controller;

import com.example.backend.entiry.Product;
import com.example.backend.repository.ProductRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Product product) {
        return new ResponseEntity<>(this.productRepository.save(product), HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody Product product) {
        return new ResponseEntity<>(this.productRepository.save(product), HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.productRepository.delete(new Product(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.productRepository.findAll(), HttpStatus.OK);
    }
}
