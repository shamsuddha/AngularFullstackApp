package com.example.backend.controller;

import com.example.backend.entity.Role;
import com.example.backend.repository.RoleRepository;
import com.example.backend.service.RoleService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Role role) {
        return new ResponseEntity<>(this.roleRepository.save(role), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody Role role) {
        return new ResponseEntity<>(this.roleRepository.save(role), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody Role role) {
        this.roleRepository.delete(role);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.roleService.search(), HttpStatus.OK);
    }
}
