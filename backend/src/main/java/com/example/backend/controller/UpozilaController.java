package com.example.backend.controller;

import com.example.backend.entity.Upozila;
import com.example.backend.repository.UpozilaRepository;
import com.example.backend.service.UpozilaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/upozila")
public class UpozilaController {

    @Autowired
    private UpozilaService upozilaService;
    @Autowired
    private UpozilaRepository upozilaRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Upozila upozila) {
        return new ResponseEntity<>(this.upozilaRepository.save(upozila), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody Upozila upozila
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody Upozila upozila) {
        return new ResponseEntity<>(this.upozilaRepository.save(upozila), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody Upozila upozila) {
        this.upozilaRepository.delete(upozila);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.upozilaService.search(), HttpStatus.OK);
    }
}