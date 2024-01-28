package com.example.backend.controller;

import com.example.backend.entity.Employee;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Employee employee) {
        return new ResponseEntity<>(this.employeeRepository.save(employee), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody Employee employee) {
        return new ResponseEntity<>(this.employeeRepository.save(employee), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody Employee employee) {
        this.employeeRepository.delete(employee);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.employeeService.search(), HttpStatus.OK);
    }
    @PostMapping(value = "/search-with-territory")
    public @ResponseBody ResponseEntity<?> searchWithTerritory() {
        return new ResponseEntity<>(this.employeeService.search(), HttpStatus.OK);
    }

}
