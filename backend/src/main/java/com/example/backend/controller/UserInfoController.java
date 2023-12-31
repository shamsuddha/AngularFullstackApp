package com.example.backend.controller;

import com.example.backend.entity.UserInfo;
import com.example.backend.repository.UserInfoRepository;
import com.example.backend.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-info")
public class UserInfoController {

  @Autowired
  private UserInfoService userInfoService;
  @Autowired
  private UserInfoRepository userInfoRepository;

  @PostMapping(value = "/save")
  public @ResponseBody ResponseEntity<?> save(@RequestBody UserInfo userInfo) {
    return new ResponseEntity<>(this.userInfoRepository.save(userInfo), HttpStatus.OK);
  }

  // @PathParam: "/update/{id}"
  // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
  // @RequestBody UserInfo userInfo
  @PutMapping(value = "/update")
  public @ResponseBody
  ResponseEntity<?> update(@RequestBody UserInfo userInfo) {
    return new ResponseEntity<>(this.userInfoRepository.save(userInfo), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete")
  public @ResponseBody
  ResponseEntity<?> delete(@RequestBody UserInfo userInfo) {
    this.userInfoRepository.delete(userInfo);
    return new ResponseEntity<>(true, HttpStatus.OK);
  }

  @PostMapping(value = "/search")
  public @ResponseBody ResponseEntity<?> search() {
    return new ResponseEntity<>(this.userInfoService.search(), HttpStatus.OK);
  }

  @PostMapping(value = "/searchWithUserInfoRole")
  public @ResponseBody ResponseEntity<?> searchWithUserInfoRole() {
    return new ResponseEntity<>(this.userInfoService.searchWithUserInfoRole(), HttpStatus.OK);
  }
}