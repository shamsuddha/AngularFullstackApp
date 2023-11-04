import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Dto/Order';
import { HttpClient } from '@angular/common/http';
import { OrderSearchDto } from '../Dto/request/OrderSearchDto';

@Injectable({
  providedIn: 'root',
})
export class OrderDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(order: Order): Observable<Order> {
    return this.httpClient.post<Order>('http://localhost:8080/order/save', order);
  }

  update(order: Order): Observable<Order> {
    //console.log(id);
    return this.httpClient.put<Order>(
      'http://localhost:8080/order/update/' + order.id,
      order
    );
    console.log(order.id);
  }

  delete(order: Order):Observable<boolean> {
    console.log(order.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/order/delete/' + order.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(orderSearchDto: OrderSearchDto): Observable<Array<Order>> {
    return this.httpClient.post<Array<Order>>(
      'http://localhost:8080/order/search',
      orderSearchDto
    );
  }
}
