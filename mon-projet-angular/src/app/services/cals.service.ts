import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {Calenda} from '../models/Calenda.model';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class CalsService {

  eventss: Calenda[] = [];
  eventsSubject = new Subject<Calenda[]>();

  constructor() { }

  emitEvents() {
    this.eventsSubject.next(this.eventss);
  }

  saveEvents() {
    firebase.database().ref('/calenda').set(this.eventss);
  }

  getEvents() {
    firebase.database().ref('/calenda').on('value', (data: DataSnapshot) => {
      this.eventss = data.val() ? data.val() : [];
      this.emitEvents();
    });
  }

  createNewEvent(newCalenda: Calenda) {
    this.eventss.push(newCalenda);
    this.saveEvents();
    this.emitEvents();
  }
}
