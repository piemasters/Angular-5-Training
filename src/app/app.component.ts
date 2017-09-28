import { ObsUsersService } from './section13/obs-users.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAd4iac6Ozaw-7STJBAJxOjEdAMdt7FBUI',
      authDomain: 'ng-recipe-book-3a818.firebaseapp.com'
    });
  }
}
