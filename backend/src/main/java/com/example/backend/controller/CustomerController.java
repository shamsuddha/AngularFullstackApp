package com.example.backend.controller;

import com.example.backend.controller.search_dto.CustomerSearchDto;
import com.example.backend.entity.Customer;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping(value = "/save")
    public @ResponseBody ResponseEntity<?> save(@RequestBody Customer customer) {
        return new ResponseEntity<>(this.customerRepository.save(customer), HttpStatus.OK);
    }

    // @PathParam: "/update/{id}"
    // @RequestParam: /update?id=3&name=abc @RequestParam Long id, @RequestParam String name
    // @RequestBody Customer customer
    @PutMapping(value = "/update")
    public @ResponseBody
    ResponseEntity<?> update(@RequestBody Customer customer) {
        return new ResponseEntity<>(this.customerRepository.save(customer), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete")
    public @ResponseBody
    ResponseEntity<?> delete(@RequestBody Customer customer) {
        this.customerRepository.delete(customer);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public @ResponseBody ResponseEntity<?> search() {
        return new ResponseEntity<>(this.customerService.search(), HttpStatus.OK);
    }


    @PostMapping(value = "/search-with-order-with-orderdetail")
    public @ResponseBody ResponseEntity<?> searchWithDistrictWithDivision(@RequestBody CustomerSearchDto customerSearchDto) {
        return new ResponseEntity<>(this.customerService.searchWithDistrictWithDivision(customerSearchDto), HttpStatus.OK);
    }


}
