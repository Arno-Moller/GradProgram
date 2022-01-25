import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ObservablesService} from "./observables.service";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
    'x-rapidapi-key': 'f6044c3476msh67dba2fc60d846ap1e5461jsn86b5fc7dd1bb'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  message = "";

  constructor(private http: HttpClient,
              private penToPrintObservable: ObservablesService) {

    this.penToPrintObservable.penToPrint.subscribe((message) => {
      this.message = message.replace(" ", "%");
    });
  }

  // detectLanguage(): Observable<any> {
  //   let value = {
  //     q: this.message
  //   };
  //   return this.http.post<any>("https://deep-translate1.p.rapidapi.com/language/translate/v2/detect", value, httpOptions);
  // }

  translate(target: string): Observable<any> {
    let value = {
      q: this.message,
      source: 'en',
      target: target
    };
    return this.http.post<any>("https://deep-translate1.p.rapidapi.com/language/translate/v2", value, httpOptions);
  }
}
