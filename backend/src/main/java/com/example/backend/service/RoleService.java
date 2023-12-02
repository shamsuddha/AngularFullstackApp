package com.example.backend.service;

import com.example.backend.entity.Role;
import com.example.backend.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> search() {
        List<Role> roleList = this.roleRepository.findAll();
        List<Role> roleList2 = roleList.stream().map((e) -> {
            e.setUserInfoRoleList(List.of());
           // e.setOrganization(null);
            return e;
        }).toList();
        return roleList2;
    }
}
