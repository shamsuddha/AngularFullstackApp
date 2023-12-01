package com.example.backend.controller;

import com.example.backend.entity.Division;
import com.example.backend.repository.DivisionRepository;
import com.example.backend.service.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/division")
public class DivisionController {

    @Autowired
    private DivisionService divisionService;
    @Autowired
    private DivisionRepository divisionRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Division division) {
        return new ResponseEntity<>(this.divisionRepository.save(division), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody Division division
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody Division division) {
        return new ResponseEntity<>(this.divisionRepository.save(division), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody Division division) {
        this.divisionRepository.delete(division);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.divisionService.search(), HttpStatus.OK);
    }

//    @PostMapping(value = "/searchWithDivisionRole")
//    public @ResponseBody ResponseEntity<?> searchWithDivisionRole() {
//        return new ResponseEntity<>(this.divisionService.searchWithDivisionRole(), HttpStatus.OK);
//    }
}

