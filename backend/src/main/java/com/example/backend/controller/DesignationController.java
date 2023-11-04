package com.example.backend.controller;

import com.example.backend.model.Designation;
import com.example.backend.repository.DesignationRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/designation")
public class DesignationController {

    @Autowired
    private DesignationRepository designationRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Designation designation) {
        return new ResponseEntity<>(this.designationRepository.save(designation), HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody Designation designation) {
        return new ResponseEntity<>(this.designationRepository.save(designation), HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.designationRepository.delete(new Designation(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.designationRepository.findAll(), HttpStatus.OK);
    }
}
