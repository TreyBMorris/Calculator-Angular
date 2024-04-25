import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestsHandlerService } from './http-requests-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService :NgbModal,private httpRequestsHandlerService :HttpRequestsHandlerService) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  inputA = "";
  inputB = "";
  parseInputA: number = 0;
  parseInputB: number = 0;
  answerText = "Enter value(s) below and select an operation";
  myError = false;
  answerNumber;

  OnClear(){
    this.inputA = "";
    this.inputB = "";
    this.myError = false;
    this.answerText = "Enter value(s) below and select an operation";
    this.answerNumber = "";
  }

  enableError(){
    this.myError = true;
  }


  onSubmitCalculations(operation: string){
    try{
      this.parseInputA = parseFloat(this.inputA);
      this.parseInputB = parseFloat(this.inputB);
      if(isNaN(this.parseInputA) || isNaN(this.parseInputB)){
        throw new Error("Invalid Input, Numbers Only");
        
      }
      this.httpRequestsHandlerService.postAddData(this.inputA, this.inputB, operation).subscribe(response => {
      if(response.isSuccess === false){
        this.myError = true;
        this.answerText = response.error;
      }
      else{
        this.myError = false;
        this.answerNumber = response.result;
        this.answerText = response.operation;
      }
      }, err => {
        console.log(err.message);
      });  
    }catch(error){
      this.myError = true;
      this.answerText = error.message;
    }
    
    }
}
