import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { GamesPaginationComponent } from './games-pagination/games-pagination.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [{
  path: 'weather',
  loadChildren: () => import('./weather/weather.module').then(mod => mod.WeatherModule),
}, {
  path: 'weather-detail/:id',
  component: WeatherDetailComponent
},
{  path: 'games',
  component: GamesPaginationComponent },
  {path:'calendar',
component: CalendarComponent},
{
  path: '',
  redirectTo: '',
  component: WeatherComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
