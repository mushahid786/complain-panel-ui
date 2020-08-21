import { Component, EventEmitter, Output, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent {
  isHovering: boolean;
  @Input() uploadType;
  @Output() uploadedFile: EventEmitter<any> = new EventEmitter();

  files: File[] = [];
  constructor(private toastr: ToastrService) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onSelect(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
  }

  uploadedFileEvent(fileData: any) {
    let pdfext = fileData.name.split(".pd")[1];
    console.log(fileData);
    console.log("ext", pdfext);



    // if (pdfext != "f" && this.uploadType == "1") {
    //   this.toastr.error(
    //     "Sorry, Please enter PDF File (pdf .pdfx) under 20 MB."
    //   );
    //   return;
    // }

    this.uploadedFile.emit(fileData);
  }
}
