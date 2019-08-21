import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { WeatherService } from '../core/services/weather.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) { }
  public primaryXAxis: Object;
  public primaryYAxis: Object;



  ngOnInit() {
    this.activatedRoute.params.pipe(
      map((params: Params) => params.id)
    ).subscribe(
      val => {
        console.log('val', val);
        this.getWeatherDetail(val);
      }
    );
  }

  getWeatherDetail(id) {
    let weatherData
    this.weatherService.getWeatherDetail(id).pipe(filter((data) => data)).subscribe((data) => {
      weatherData = data;
      if (weatherData) {
        let data;
        data = weatherData.map((data) => {
          return {
            x: data.Temperature.Metric.Value,
            y: data.Temperature.Imperial.Value
          }
        })
        let weatherText;
        weatherText = weatherData.map((data) => {
          return [
            data.WeatherText
          ];
        })
        console.log(data);
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: weatherText,
            datasets: [{
              label: 'Weather Detail',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    });

  }

}
