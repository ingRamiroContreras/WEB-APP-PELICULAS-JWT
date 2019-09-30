import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  
   constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reservas` + '/');
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reservas` + '/' + id);
  }

  save(reserva: any): Observable<any> {
    ;
    let result: Observable<any>;

    result = this.http.post(`${environment.apiUrl}/reservas` + '/', reserva);

    return result;
  }

  remove(id: string) {
    return this.http.delete(`${environment.apiUrl}/reservas` + '/' + id);
  }
}
