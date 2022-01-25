import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ObservablesService} from "./observables.service";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    authorization: 'Basic ZnhkYTI5MjY6eEl2MUJ6QkY=',
    'x-rapidapi-host': 'd7sms.p.rapidapi.com',
    'x-rapidapi-key': 'f6044c3476msh67dba2fc60d846ap1e5461jsn86b5fc7dd1bb'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = "";

  constructor(private http: HttpClient,
              private penToPrintObservable: ObservablesService) {

    this.penToPrintObservable.penToPrint.subscribe((message) => {
      this.message = message.replace(" ", "%");
    });
  }

  sendSms(message: string, number: string): Observable<any> {
    let data = {
      content: message,
      from: 'D7-Rapid',
      to: number
    }

    return this.http.post<any>("https://d7sms.p.rapidapi.com/secure/send", data, httpOptions);
  }
}
