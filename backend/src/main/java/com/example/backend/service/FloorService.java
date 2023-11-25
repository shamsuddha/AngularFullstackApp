package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.*;
import com.example.backend.repository.RoomRepository;
import com.example.backend.util.serde.TransformUtil;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.repository.FloorRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class FloorService {

  private final EntityManager entityManager;
  @Autowired
  private FloorRepository floorRepository;
  @Autowired
  private RoomRepository roomRepository;

  public Floor saveWithRoom(Floor floor) {
    floor.getRoomList().forEach(e->System.out.println("from prop "+e.getName()));
    floor.getRoomListSerde().forEach(e->System.out.println("from serde "+e.getName()));
    Floor floorSaved = this.floorRepository.save(floor);
    List<Room> roomList = floor.getRoomList().stream().map(e -> {
      e.setFloor(new Floor(floorSaved.getId()));
      return e;
    }).toList();
    List<Room> roomListSaved = this.roomRepository.saveAll(roomList);
    floorSaved.setRoomListSerde(roomListSaved);
    return floorSaved;
  }

  public List<Floor> search() {
    List<Floor> floorList = this.floorRepository.findAll();
    return floorList;
  }

  public List<Floor> searchWithRoomList() {
    final QRoom qRoom = QRoom.room;
    final QFloor qFloor = QFloor.floor;
    final JPAQuery<Floor> query = new JPAQuery<>(entityManager);
    List<Floor> floorWithRoomList = query.from(qFloor)
            .leftJoin(qFloor.roomList, qRoom).fetchJoin()
            .fetch();
    List<Floor> floorWithRoomListRsp = floorWithRoomList.stream().map(e->{
      e.setRoomListSerde(TransformUtil.copyList(e.getRoomList(),Room.class));
      return e;
    }).toList();
    return floorWithRoomList;
  }
}

  

