package com.example.backend.controller;

import com.example.backend.entity.Comment;
import com.example.backend.repository.CommentRepository;
import com.example.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private CommentRepository commentRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Comment comment) {
        return new ResponseEntity<>(this.commentRepository.save(comment), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody Comment comment
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody Comment comment) {
        return new ResponseEntity<>(this.commentRepository.save(comment), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody Comment comment) {
        this.commentRepository.delete(comment);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.commentService.search(), HttpStatus.OK);
    }

    @PostMapping(value = "/search-with-division")
    public @ResponseBody ResponseEntity<?> searchWithPost() {
        return new ResponseEntity<>(this.commentService.searchWithPost(), HttpStatus.OK);
    }
}