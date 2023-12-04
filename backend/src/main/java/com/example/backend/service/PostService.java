package com.example.backend.service;

import com.example.backend.entity.Comment;
import com.example.backend.entity.Post;
import com.example.backend.repository.PostRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PostService {
    private final EntityManager entityManager;
    @Autowired
    private PostRepository postRepository;

    public List<Post> search() {
        return this.postRepository.findAll();
    }


}
