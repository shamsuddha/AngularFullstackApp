package com.example.backend.controller;

import com.example.backend.entity.Upozila;
import com.example.backend.repository.UpozilaRepository;
import com.example.backend.service.UpozilaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class UpozilaController {

    @Autowired
    private UpozilaService districtService;
    @Autowired
    private UpozilaRepository districtRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Upozila district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody Upozila district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody Upozila district) {
        this.districtRepository.delete(district);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.districtService.search(), HttpStatus.OK);
    }

    @PostMapping(value = "/search-with-district")
    public @ResponseBody ResponseEntity<?> searchWithUpozila() {
        return new ResponseEntity<>(this.districtService.searchWithUpozila(), HttpStatus.OK);
    }
}
