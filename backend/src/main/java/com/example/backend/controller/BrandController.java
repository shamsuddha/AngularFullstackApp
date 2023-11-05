package com.example.backend.controller;

import com.example.backend.entity.Brand;
import com.example.backend.repository.BrandRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/brand")
public class BrandController {

    @Autowired
    private BrandRepository brandRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Brand brand) {
        return new ResponseEntity<>(this.brandRepository.save(brand), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody UserInfo brand
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody Brand brand) {
        return new ResponseEntity<>(this.brandRepository.save(brand), HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.brandRepository.delete(new Brand(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.brandRepository.findAll(), HttpStatus.OK);
    }
}
