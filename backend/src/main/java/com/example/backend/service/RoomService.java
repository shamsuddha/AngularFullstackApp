package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.*;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.repository.RoomRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomService {

  private final EntityManager entityManager;
  @Autowired
  private RoomRepository roomRepository;

  public List<Room> search() {
        List<Room> roomList = this.roomRepository.findAll();
        return roomList;
        // List<Room> roomList2 = roomList.stream().map((e) -> {
        //   e.setRoomList(List.of());
          
        //     //e.setUserInfoRoleList(List.of());
        //    // e.setOrganization(null);
        //     return e;
        // }).toList();
        // return roomList2;
    }

    public List<Room> searchWithFloor() {
        final QFloor qFloor = QFloor.floor;
        final QRoom qRoom = QRoom.room;
        final JPAQuery<Room> query = new JPAQuery<>(entityManager);
        List<Room> roomList = query.from(qRoom)
                .leftJoin(qRoom.floor, qFloor).fetchJoin()
                .fetch();
        return roomList;
    }
}

  

