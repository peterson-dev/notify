import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { EventResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private endpoint = 'https://us-central1-ps-notify-api.cloudfunctions.net/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<EventResponse> {
  }

  private getByRoute<T>(route: string): Observable<T> {
  }
}
