package com.example.backend.service;

import com.example.backend.entity.UserInfo;
import com.example.backend.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserInfoService {
    @Autowired
    private UserInfoRepository userInfoRepository;

    public List<UserInfo> search(){
        List<UserInfo> userInfoList = this.userInfoRepository.findAll();
        return userInfoList.stream().map( (e)-> {
            e.setUserInfoRoleList(List.of());
            return e;
        }).toList();

    }
}
