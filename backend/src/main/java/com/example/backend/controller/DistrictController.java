package com.example.backend.controller;

import com.example.backend.entity.District;
import com.example.backend.repository.DistrictRepository;
import com.example.backend.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class DistrictController {

    @Autowired
    private DistrictService districtService;
    @Autowired
    private DistrictRepository districtRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody District district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody District district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody District district) {
        this.districtRepository.delete(district);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.districtService.search(), HttpStatus.OK);
    }

    @PostMapping(value = "/search-with-district")
    public @ResponseBody ResponseEntity<?> searchWithDistrict() {
        return new ResponseEntity<>(this.districtService.searchWithDistrict(), HttpStatus.OK);
    }
}