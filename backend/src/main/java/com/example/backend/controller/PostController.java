package com.example.backend.controller;

import com.example.backend.entity.Post;
import com.example.backend.repository.PostRepository;
import com.example.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;
    @Autowired
    private PostRepository postRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Post post) {
        return new ResponseEntity<>(this.postRepository.save(post), HttpStatus.OK);
    }

//    @PostMapping(value = "/save-with-upozila")
//    public @ResponseBody ResponseEntity<?> saveWithRoom(@RequestBody Post post) {
//        return new ResponseEntity<>(this.postService.saveWithUpozila(post), HttpStatus.OK);
//    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody Post post
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody Post post) {
        return new ResponseEntity<>(this.postRepository.save(post), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody Post post) {
        this.postRepository.delete(post);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.postService.search(), HttpStatus.OK);
    }

//    @PostMapping(value = "/search-with-division")
//    public @ResponseBody ResponseEntity<?> searchWithDivision() {
//        return new ResponseEntity<>(this.postService.searchWithDivision(), HttpStatus.OK);
//    }
}


