package com.example.backend.service;

import com.example.backend.entity.Category;
import com.example.backend.entity.Comment;
import com.example.backend.repository.CommentRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentService {
    private final EntityManager entityManager;
    @Autowired
    private CommentRepository commentRepository;


    public List<Comment> search() {
        return this.commentRepository.findAll();
    }

    public Object searchWithPost() {
        return "ab";
    }
}