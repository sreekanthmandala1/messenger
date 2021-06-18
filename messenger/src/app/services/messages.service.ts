import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sms } from '../models/sms.model';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  saveMessages(message: Sms) {
    return this.http.post('http://localhost:3000/chat', message);
  }

  fetchData() {
    return this.http.get('http://localhost:3000/chat');
  }
}
