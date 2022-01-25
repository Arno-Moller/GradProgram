import { Component, OnInit } from '@angular/core';
import {ObservablesService} from "../service/observables.service";
import {TranslateService} from "../service/translate.service";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  text: string = '';

  number: string = '';

  sourceLanguage: string = 'en';

  targetLanguage: string = '';

  constructor(private penToPrintObservable: ObservablesService,
              private translateService: TranslateService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.penToPrintObservable.penToPrint.subscribe(async (message) => {
      this.text = message;
      console.log(message)
    })
  }

  translate(){
    this.translateService.translate(this.targetLanguage).subscribe((value) => {
      // this.sourceLanguage = value.data.detections[0][0].language;
       this.text = value.data.translations.translatedText.replace("%", " ");
    });
  }

  sendMessage(){
    this.messageService.sendSms(this.text, this.number).subscribe((val) => {
      console.log(val);
    });
  }

}
