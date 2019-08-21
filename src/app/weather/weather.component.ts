import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../core/services/weather.service';
import { MatSort } from '@angular/material/sort';
import { debounce } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { timer, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  displayedColumns = ['Region', 'Country', 'TimeZone', 'Longitude', 'Latitude'];
  dataSource: any;
  searchValue = new FormControl('')
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  weather$ = this.weatherService.getWeather()

  get weather() {
    return JSON.parse(localStorage.getItem('weatherOverView'));
  }
  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data) => {
      this.dataSource = data;
      localStorage.setItem('weatherOverView', JSON.stringify(this.dataSource))
      console.log(this.dataSource, 'datasources', 'sort', this.sort);
      // if (this.dataSource) this.dataSource = this.sort;
    });
  }

  search(value) {
    if (value === '') {
      return this.dataSource = this.weather;
    }
    value = value.replace(/\w+/g, (w: string) => w[0].toUpperCase() + w.slice(1).toLowerCase());

    const filtered = this.weather.filter((item) => {
      console.log(item.Country.EnglishName.toString());
      return item.Country.EnglishName.toString() === value;
    })[0]
    console.log(filtered, 'weather');
    let result;
    result = filtered.map(data => {
      return [
        ...data
      ]
    })
    this.dataSource = result;
  }

  values(obj) {
    if (!obj || obj.length < 1) return;

    const arr = obj.map(item => item)
    console.log(arr)
  }
  viewWeather(event) {
    this.router.navigate(['weather-detail', event.Key])
  }
}
