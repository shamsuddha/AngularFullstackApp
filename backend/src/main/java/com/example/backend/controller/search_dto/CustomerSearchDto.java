package com.example.backend.controller.search_dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CustomerSearchDto extends SearchDto{
    private Long customerId;
    private Long orderInfoId;
    private Long orderInfoDetailId;
}
