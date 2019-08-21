import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const url = 'https://free-nba.p.rapidapi.com/games?page=0&per_page=10';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) {

  }

  getGames(page = 0, pageSize= 10): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': 'bdac755d78msha920a8d278fd596p1adacbjsn1b1b384e667b'
    });
    return this.httpClient.get(`https://free-nba.p.rapidapi.com/games?page=${page}&per_page=${pageSize}`, {headers: headers})
  }
}
