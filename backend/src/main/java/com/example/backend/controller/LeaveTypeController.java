package com.example.backend.controller;

import com.example.backend.model.LeaveType;
import com.example.backend.repository.LeaveTypeRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/leaveType")
public class LeaveTypeController {

    @Autowired
    private LeaveTypeRepository leaveTypeRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody LeaveType leaveType) {
        return new ResponseEntity<>(this.leaveTypeRepository.save(leaveType), HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody LeaveType leaveType) {
        return new ResponseEntity<>(this.leaveTypeRepository.save(leaveType), HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.leaveTypeRepository.delete(new LeaveType(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.leaveTypeRepository.findAll(), HttpStatus.OK);
    }
}
