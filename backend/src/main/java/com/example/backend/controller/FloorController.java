package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.entity.Floor;
import com.example.backend.repository.FloorRepository;
import com.example.backend.service.FloorService;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/floor")
public class FloorController {

    @Autowired
    private FloorService floorService;
    @Autowired
    private FloorRepository floorRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Floor floor) {
        return new ResponseEntity<>(this.floorRepository.save(floor), HttpStatus.OK);
    }

    @PostMapping(value = "/save-with-room")
    public @ResponseBody ResponseEntity<?> saveWithRoom(@RequestBody Floor floor) {
        return new ResponseEntity<>(this.floorService.saveWithRoom(floor), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody Floor floor) {
        return new ResponseEntity<>(this.floorRepository.save(floor), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody Floor floor) {
        this.floorRepository.delete(floor);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.floorService.search(), HttpStatus.OK);
    }
}
