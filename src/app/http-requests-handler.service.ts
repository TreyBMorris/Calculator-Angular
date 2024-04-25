import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestsHandlerService {

  constructor(private http: HttpClient) { }

  public postAddData(firstNumber, secondNumber, operation): Observable<any>{
    const data = {
      "firstNumber": firstNumber,
      "secondNumber": secondNumber
    };
  const apiUrl = environment.apiUrl;

  switch(operation){
      case 'add':
        return this.http.post<any>(apiUrl + '/add', data);
      case 'subtract':
        return this.http.post<any>(apiUrl + '/subtract', data);
      case 'multiply':
        return this.http.post<any>(apiUrl + '/multiply', data);
      case 'divide':
        return this.http.post<any>(apiUrl +'/divide', data);
      case 'power':
        return this.http.post<any>(apiUrl + '/power', data);
      case 'log':
        return this.http.post<any>(apiUrl + '/logarithm', data);
      case 'root':
        return this.http.post<any>(apiUrl + '/root', data);
      case 'factorial':
        return this.http.post<any>(apiUrl + '/factorial', data);
      case 'reciprocal':
        return this.http.post<any>(apiUrl + '/reciprocal', data);
      default:
        console.log("unknown operation");
    }
  }
}
