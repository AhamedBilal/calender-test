import {Component} from '@angular/core';
import {addDays, addHours, endOfDay, endOfMonth, startOfDay, subDays} from 'date-fns';
import {CalendarEvent, CalendarEventAction} from 'angular-calendar';
import {Subject} from 'rxjs';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calender-data',
  templateUrl: './calender-data.component.html',
  styleUrls: ['./calender-data.component.css']
})
export class CalenderDataComponent {

  refresh: Subject<any> = new Subject();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];


  activeDayIsOpen = false;


  constructor() {
    console.log(JSON.parse(localStorage.getItem('data')) as Array<CalendarEvent>);
    if (!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify([
        {
          start: subDays(startOfDay(new Date()), 1),
          end: addDays(new Date(), 1),
          title: 'A 3 day event',
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true,
        },
        {
          start: startOfDay(new Date()),
          title: 'An event with no end date',
          color: colors.yellow,
          actions: this.actions,
        },
        {
          start: subDays(endOfMonth(new Date()), 3),
          end: addDays(endOfMonth(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: colors.blue,
          allDay: true,
        },
        {
          start: addHours(startOfDay(new Date()), 2),
          end: addHours(new Date(), 2),
          title: 'A draggable and resizable event',
          color: colors.yellow,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true,
        },
      ]));
    } else {
      this.events = JSON.parse(localStorage.getItem('data'));
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
    localStorage.setItem('data', JSON.stringify(this.events));
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
    localStorage.setItem('data', JSON.stringify(this.events));
  }
}
