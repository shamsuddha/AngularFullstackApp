package com.example.backend.controller;

import com.example.backend.entity.UserInfo;
import com.example.backend.repository.UserInfoRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserInfoController {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody UserInfo userInfo) {
        return new ResponseEntity<>(this.userInfoRepository.save(userInfo), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody UserInfo userInfo
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody UserInfo userInfo) {
        return new ResponseEntity<>(this.userInfoRepository.save(userInfo), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id, @RequestBody UserInfo userInfo) {
        this.userInfoRepository.delete(userInfo);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.userInfoRepository.findAll(), HttpStatus.OK);
    }
}