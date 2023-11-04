package com.example.backend.controller;

import com.example.backend.model.Salary;
import com.example.backend.repository.SalaryRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/salary")
public class SalaryController {

    @Autowired
    private SalaryRepository salaryRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Salary salary) {
        return new ResponseEntity<>(this.salaryRepository.save(salary), HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody Salary salary) {
        return new ResponseEntity<>(this.salaryRepository.save(salary), HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.salaryRepository.delete(new Salary(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.salaryRepository.findAll(), HttpStatus.OK);
    }
}
