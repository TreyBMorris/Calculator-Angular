import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService :NgbModal,private http: HttpClient){
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  inputA = "";
  inputB = "";
  answerText = "Enter value(s) below and select an operation";
  myError = false;
  
  OnClear(){
    this.inputA = "";
    this.inputB = "";
    this.myError = false;
  }

  enableError(){
    this.myError = true;
  }
}
