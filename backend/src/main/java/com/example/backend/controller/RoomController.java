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

import com.example.backend.entity.Room;
import com.example.backend.repository.RoomRepository;
import com.example.backend.service.RoomService;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/room")
public class RoomController {

  @Autowired
  private RoomService roomService;

  @Autowired
  private RoomRepository roomRepository;

  @PostMapping(value = "/save")
  public @ResponseBody ResponseEntity<?> save(@RequestBody Room room) {
    return new ResponseEntity<>(this.roomRepository.save(room), HttpStatus.OK);
  }

  @PutMapping(value = "/update")
  public @ResponseBody ResponseEntity<?> update(@RequestBody Room room) {
    return new ResponseEntity<>(this.roomRepository.save(room), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete")
  public @ResponseBody ResponseEntity<?> delete(@RequestBody Room room) {
    this.roomRepository.delete(room);
    return new ResponseEntity<>(true, HttpStatus.OK);
  }

  @PostMapping(value = "/search")
  public @ResponseBody ResponseEntity<?> search() {
    return new ResponseEntity<>(this.roomService.search(), HttpStatus.OK);
  }
}
