import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  views : number = 0;

  incrementViews() {
    this.views++;
  }

  ngOnInit() {
    sessionStorage.getItem('views') ? this.views = Number(sessionStorage.getItem('views')) : this.views = 0;
    this.incrementViews();
    sessionStorage.setItem('views', String(this.views));
  }
}
