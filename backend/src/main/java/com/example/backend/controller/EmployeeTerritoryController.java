package com.example.backend.controller;

import com.example.backend.entity.EmployeeTerritory;
import com.example.backend.repository.EmployeeTerritoryRepository;
import com.example.backend.service.EmployeeTerritoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee-territory")
public class EmployeeTerritoryController {

    @Autowired
    private EmployeeTerritoryService employeeTerritoryService;
    @Autowired
    private EmployeeTerritoryRepository employeeTerritoryRepository;


    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody EmployeeTerritory employeeTerritory) {
        return new ResponseEntity<>(this.employeeTerritoryRepository.save(employeeTerritory), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody EmployeeTerritory employeeTerritory) {
        return new ResponseEntity<>(this.employeeTerritoryRepository.save(employeeTerritory), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody EmployeeTerritory employeeTerritory) {
        this.employeeTerritoryRepository.delete(employeeTerritory);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.employeeTerritoryService.search(), HttpStatus.OK);
    }

}
