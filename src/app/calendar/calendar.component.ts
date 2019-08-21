import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClient } from '@angular/common/http';
import { CalendarService } from '../core/services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  calendar: any;
  events: any;
  constructor(private cs: CalendarService) { }

  ngOnInit() {
    this.cs.getCalendarEvents().subscribe((data) => {
      this.calendar = data;
      this.events = this.getEvents(data);
      console.log('calendar', this.events)
    });
  }

  getEvents(calendar) {
    if (!calendar) return;
    const events = calendar.search.events.event.map(data => {
      return {
        title: data.title,
        date: data.start_time
      }
    });
    return events;
  }
  handleDateClick(event){
    console.log(event)
  }

}
