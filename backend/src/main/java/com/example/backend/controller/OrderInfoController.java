package com.example.backend.controller;

import com.example.backend.entity.OrderInfo;
import com.example.backend.repository.OrderInfoRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderInfoController {

    @Autowired
    private OrderInfoRepository orderInfoRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody OrderInfo orderInfo) {
        return new ResponseEntity<>(this.orderInfoRepository.save(orderInfo), HttpStatus.OK);
    }

    @PutMapping(value = "/update/{id}")
    public @ResponseBody ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody OrderInfo orderInfo) {
        return new ResponseEntity<>(this.orderInfoRepository.save(orderInfo), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody ResponseEntity<?> delete(@PathParam("id") Long id) {
        this.orderInfoRepository.delete(new OrderInfo(id));
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.orderInfoRepository.findAll(), HttpStatus.OK);
    }
}
