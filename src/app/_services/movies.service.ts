import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movies` + '/');
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movies` + '/' + id);
  }

  save(movie: any): Observable<any> {
    let result: Observable<any>;
    ;
    result = this.http.post(`${environment.apiUrl}/movies`, movie);

    return result;
  }

  remove(id: string) {
    return this.http.delete(`${environment.apiUrl}/movies`+ '/' + id);
  }
  getAllFecha(fecha: any): Observable<any> {
    ;
    return this.http.get(`${environment.apiUrl}/movies` + '/fechacreacion/' + fecha);
  }
}
