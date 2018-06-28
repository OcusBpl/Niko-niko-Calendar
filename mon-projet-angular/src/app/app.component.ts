import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyBRVnwA2g4pjeYyHQ-ZCNJi7coO1YZqsS0",
      authDomain: "my-project-1520253568112.firebaseapp.com",
      databaseURL: "https://my-project-1520253568112.firebaseio.com",
      projectId: "my-project-1520253568112",
      storageBucket: "",
      messagingSenderId: "553626815395"
    };
    firebase.initializeApp(config);
  }
}
