package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.Room;
import com.example.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.entity.Floor;
import com.example.backend.entity.Role;
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
       Floor floorSaved = this.floorRepository.save(floor);
       List<Room> roomList = floor.getRoomListForSerde().stream().map(e->{
           e.setFloor(new Floor(floorSaved.getId()));
           return e;
       }).toList();
       roomList.forEach(e-> System.out.println(e.getFloor().getId() + "," + e.getName()));
       this.roomRepository.saveAll(roomList);
       return  floor;
    }

    public List<Floor> search() {
        List<Floor> floorList = this.floorRepository.findAll();
        return floorList;
    }


}

  

