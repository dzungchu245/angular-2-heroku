import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeStateTrigger({startOpacity: 0, duration: '1000ms'}),
    routeSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
  
  @HostBinding('@routeFadeState') routeAnime = true;
  //@HostBinding('@routeSlideState') routeAnime = true;

  constructor() { }

  ngOnInit() {
  }

}
