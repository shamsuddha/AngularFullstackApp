package com.example.backend.controller;

import com.example.backend.entity.District;
import com.example.backend.entity.Floor;
import com.example.backend.repository.DistrictRepository;
import com.example.backend.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;
    @Autowired
    private DistrictRepository districtRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody District district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @PostMapping(value = "/save-with-upozila")
    public @ResponseBody ResponseEntity<?> saveWithRoom(@RequestBody District district) {
        return new ResponseEntity<>(this.districtService.saveWithUpozila(district), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody District district
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody District district) {
        return new ResponseEntity<>(this.districtRepository.save(district), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody District district) {
        this.districtRepository.delete(district);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.districtService.search(), HttpStatus.OK);
    }

    @PostMapping(value = "/search-with-division")
    public @ResponseBody ResponseEntity<?> searchWithDivision() {
        return new ResponseEntity<>(this.districtService.searchWithDivision(), HttpStatus.OK);
    }
}

