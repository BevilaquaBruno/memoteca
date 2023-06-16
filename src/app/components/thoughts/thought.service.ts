import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThoughtInterface } from './thought/Thought.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  list(page: number): Observable<ThoughtInterface[]> {
    const itensPerPage = 2;
    let params = new HttpParams()
    .set("_page", page)
    .set("_limit", itensPerPage);

    return this.http
      .get<ThoughtInterface[]>(this.API, { params });
  }

  create(thought: ThoughtInterface): Observable<ThoughtInterface>{
    return this.http.post<ThoughtInterface>(this.API, thought);
  }

  delete(id: number): Observable<ThoughtInterface>{
    const url = `${this.API}/${id}`;
    return this.http.delete<ThoughtInterface>(url);
  }

  findById(id: number): Observable<ThoughtInterface>{
    const url = `${this.API}/${id}`;
    return this.http.get<ThoughtInterface>(url);
  }

  edit(thought: ThoughtInterface): Observable<ThoughtInterface>{
    const url = `${this.API}/${thought.id}`;
    return this.http.put<ThoughtInterface>(url, thought);
  }
}
