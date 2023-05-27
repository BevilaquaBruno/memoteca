import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThoughtInterface } from './thought/Thought.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  list(): Observable<ThoughtInterface[]> {
    return this.http.get<ThoughtInterface[]>(this.API);
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
