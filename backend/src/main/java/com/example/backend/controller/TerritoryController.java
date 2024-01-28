package com.example.backend.controller;

import com.example.backend.controller.search_dto.TerritorySearchDto;
import com.example.backend.entity.Territory;
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

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Territory territory) {
        return new ResponseEntity<>(this.territoryRepository.save(territory), HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public @ResponseBody ResponseEntity<?> update(@RequestBody Territory territory) {
        return new ResponseEntity<>(this.territoryRepository.save(territory), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody ResponseEntity<?> delete(@RequestBody Territory territory) {
        this.territoryRepository.delete(territory);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.territoryService.search(), HttpStatus.OK);
    }

}
