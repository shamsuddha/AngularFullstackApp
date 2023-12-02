package com.example.backend.service;

import com.example.backend.entity.Floor;
import com.example.backend.entity.QFloor;
import com.example.backend.entity.QRoom;
import com.example.backend.entity.Room;
import com.example.backend.repository.FloorRepository;
import com.example.backend.repository.RoomRepository;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.example.backend.util.transform.SwallowCopyUtil.swallowCopy;

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
    floor.getRoomList().forEach(e -> System.out.println("from prop " + e.getName()));
    floor.getRoomListSerde().forEach(e -> System.out.println("from serde " + e.getName()));
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

    List<Floor> floorWithRoomList5 = floorWithRoomList.stream().map(f1 -> {
      List<Room> roomListT1 = f1.getRoomList().parallelStream().map(r1 -> {
        Room r2 = null;
        try {
          r2 = swallowCopy(r1);
        } catch (IllegalAccessException | InstantiationException e) {
          throw new RuntimeException(e);
        }
        System.out.println(Objects.nonNull(r2.getFloor()) ? r2.getFloor().getId() : null);
        return r2;

      }).toList();
      //List<Room> roomListT2 = mapList(f1.getRoomList(), Room.class, toRoom);
      f1.setRoomListSerde(roomListT1);
      return f1;
    }).toList();
    return floorWithRoomList5;
  }

  Function<Room, Room> toRoom = room -> new Room()
    .setId(room.getId())
    .setName(room.getName())
    .setCode(room.getCode());

  public static <X, Y> List<Y> mapList(List<X> list, Class<Y> clazz, Function<X, Y> fn) {
    return list.parallelStream().map(e -> fn.apply(e)).collect(Collectors.toList());
  }

}

  

