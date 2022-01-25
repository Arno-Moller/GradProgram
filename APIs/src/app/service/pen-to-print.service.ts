import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    // 'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
    'x-rapidapi-host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
    'x-rapidapi-key': '854604f7cemsh278312b1c5728f0p11c83bjsn897638482f6b',
    useQueryString: 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PenToPrintService {

  constructor(private http: HttpClient) { }

  convert(pic: any): Observable<any> {
    return this.http.post<any>("https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/", pic, httpOptions);
  }
}
