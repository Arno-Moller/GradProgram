import { Component, OnInit } from '@angular/core';
import {PenToPrintService} from "../service/pen-to-print.service";
import {ObservablesService} from "../service/observables.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  // @ts-ignore
  file: File = null; // Variable to store file

  // Inject service
  constructor(private penToPrint: PenToPrintService,
              private penToPrintObservable: ObservablesService) { }

  ngOnInit(): void {
  }

  // On file Select
  // @ts-ignore
  onChange(event) {
    this.file = event.target.files[0];

    /** Remove this line */
    // this.penToPrintObservable.SetMessage("Test text to test");
  }

  // OnClick of button Upload
  onUpload() {
    const data = new FormData();
    // @ts-ignore
    data.append("srcImg", this.file);
    data.append("session", "string");
    data.append("includeSubScan", "1");

    this.penToPrint.convert(data).subscribe(
      (res: any) => {
        console.log(res.value);
        this.penToPrintObservable.SetMessage(res.value);
      }
    );
  }

}
