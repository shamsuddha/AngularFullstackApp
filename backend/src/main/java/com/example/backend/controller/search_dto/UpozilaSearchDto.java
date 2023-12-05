package com.example.backend.controller.search_dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UpozilaSearchDto extends SearchDto {

  private String name;
  private Long districtId;
  private Long divisionId;

}
