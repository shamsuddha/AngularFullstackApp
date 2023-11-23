package com.example.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.entity.Floor;
import com.example.backend.entity.Role;
import com.example.backend.repository.FloorRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class FloorService {

  private final EntityManager entityManager;

  @Autowired
  private FloorRepository floorRepository;

  public List<Floor> search() {
        List<Floor> floorList = this.floorRepository.findAll();
        List<Floor> floorList2 = floorList.stream().map((e) -> {
          e.setRoomList(List.of());
          
            //e.setUserInfoRoleList(List.of());
           // e.setOrganization(null);
            return e;
        }).toList();
        return floorList2;
    }
  
}

  

