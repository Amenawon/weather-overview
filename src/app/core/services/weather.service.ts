import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const url = 'http://dataservice.accuweather.com/locations/v1/search?apikey=2NSFANp1wQVzyuCpwqMREzutkihng73x&q=bi&details=false&offset=10';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getWeather(): Observable<any> {
    return this.http.get(url);
  }

  getWeatherDetail(id): Observable<any>  {
   return this.http.get('../../assets/weather.json')
  }

}
