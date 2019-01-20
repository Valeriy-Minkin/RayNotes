import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes';


    ngOnInit() {
      document.addEventListener('deviceready', function() {
      alert('Hello');
      }, false);
      }
    }
