import { Injectable } from '@angular/core';
import { Shirt } from './shirt';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  private SERVICE_URL = '/api';

  constructor(private http: HttpClient) { }

  selectedShirt: Shirt;

  getShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(this.SERVICE_URL);
  }
}
