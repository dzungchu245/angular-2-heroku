import { Component } from '@angular/core';
import { routeStateTrigger } from './shared/route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeStateTrigger
  ]
})
export class AppComponent {
  getAnimationData = (outlet: RouterOutlet) => {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}
