import { Component, OnDestroy, OnInit } from '@angular/core';
import {Calenda} from '../models/Calenda.model';
import {Subscription} from 'rxjs';
import {CalsService} from '../services/cals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calenda',
  templateUrl: './calenda.component.html',
  styleUrls: ['./calenda.component.scss']
})
export class CalendaComponent implements OnInit {

  eventss: Calenda[];
  eventsSubscription: Subscription;

  constructor(private calsService: CalsService,
              private router: Router) { }


  onNewEvent() {
    this.router.navigate(['/calenda', 'new']);
  }

  ngOnInit() {
    this.eventsSubscription = this.calsService.eventsSubject.subscribe((eventss: Calenda[]) => {
      this.eventss = eventss;
    });
    this.calsService.getEvents();
    this.calsService.emitEvents();
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
