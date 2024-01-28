package com.example.backend.controller;

import com.example.backend.controller.search_dto.TerritorySearchDto;
import com.example.backend.repository.TerritoryRepository;
import com.example.backend.service.TerritoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/territory")
public class TerritoryController {
    @Autowired
    private TerritoryService territoryService;
    @Autowired
    private TerritoryRepository territoryRepository;

    @PostMapping(value = "/search-with-employee")
    public @ResponseBody ResponseEntity<?> searchWithEmployee(@RequestBody TerritorySearchDto territorySearchDto) {
        return new ResponseEntity<>(this.territoryService.searchWithEmployee(), HttpStatus.OK);
    }
}
