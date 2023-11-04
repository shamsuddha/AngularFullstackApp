import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from '../Dto/OrderDetail';
import { HttpClient } from '@angular/common/http';
import { OrderSearchDto } from '../Dto/request/OrderSearchDto';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(order: OrderDetail): Observable<OrderDetail> {
    return this.httpClient.post<OrderDetail>('http://localhost:8080/order/save', order);
  }

  update(order: OrderDetail): Observable<OrderDetail> {
    //console.log(id);
    return this.httpClient.put<OrderDetail>(
      'http://localhost:8080/order/update/' + order.id,
      order
    );
    console.log(order.id);
  }

  delete(order: OrderDetail):Observable<boolean> {
    console.log(order.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/order/delete/' + order.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(orderSearchDto: OrderSearchDto): Observable<Array<OrderDetail>> {
    return this.httpClient.post<Array<OrderDetail>>(
      'http://localhost:8080/order/search',
      orderSearchDto
    );
  }
}
