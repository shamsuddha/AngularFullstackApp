package com.example.backend.controller;

import com.example.backend.entity.OrderInfoDetail;
import com.example.backend.repository.OrderInfoDetailRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/orderDetail")
public class OrderInfoDetailController {

    @Autowired
    private OrderInfoDetailRepository orderDetailRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody OrderInfoDetail orderDetail) {
        return new ResponseEntity<>(this.orderDetailRepository.save(orderDetail), HttpStatus.OK);
    }

    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody OrderInfoDetail orderDetail) {
        return new ResponseEntity<>(this.orderDetailRepository.save(orderDetail), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.orderDetailRepository.delete(new OrderInfoDetail(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.orderDetailRepository.findAll(), HttpStatus.OK);
    }
}
