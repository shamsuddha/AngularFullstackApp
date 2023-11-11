package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.UserInfoRole;
import com.example.backend.repository.UserInfoRoleRepository;

import jakarta.websocket.server.PathParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user-info-role")
public class UserInfoRoleController {
  @Autowired
    private UserInfoRoleRepository userInfoRoleRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody UserInfoRole userInfoRole) {
        return new ResponseEntity<>(this.userInfoRoleRepository.save(userInfoRole), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody UserInfoRole userInfoRole
    @PutMapping(value = "/update/{id}")
    public @ResponseBody
    ResponseEntity<?> update(@PathParam("id") Long id, @RequestBody UserInfoRole userInfoRole) {
        return new ResponseEntity<>(this.userInfoRoleRepository.save(userInfoRole), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public @ResponseBody
    ResponseEntity<?> delete(@PathParam("id") Long id, @RequestBody UserInfoRole userInfoRole) {
        this.userInfoRoleRepository.delete(userInfoRole);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.userInfoRoleRepository.findAll(), HttpStatus.OK);
    }
}