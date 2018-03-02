import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAM2afoDIAM33mHYoUpGHdM65x0vMPDd4Y',
      authDomain: 'appcompras-9fd9a.firebaseapp.com',
      databaseURL: 'https://appcompras-9fd9a.firebaseio.com',
      projectId: 'appcompras-9fd9a',
      storageBucket: 'appcompras-9fd9a.appspot.com',
      messagingSenderId: '500288759294'
    });
  }
}
