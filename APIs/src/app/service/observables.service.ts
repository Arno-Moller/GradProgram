import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  public penToPrint: BehaviorSubject<any> = new BehaviorSubject<any>({
    message: ''
  });

  constructor() {
    this.penToPrint.next('');
  }

  SetMessage(message: string){
    this.penToPrint.next(message);
  }
}
