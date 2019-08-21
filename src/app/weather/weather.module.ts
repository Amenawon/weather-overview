import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherComponent,
    }, {
        path: 'detail/:id',
        component: WeatherDetailComponent
    }
];

@NgModule({
    declarations: [WeatherComponent],
    imports: [
        CommonModule,
        MatSortModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [WeatherComponent],

})
export class WeatherModule { }
