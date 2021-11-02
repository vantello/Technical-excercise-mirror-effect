import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeViewComponent {

  @HostBinding('class') className = 'app-home';

  isEnglish = true;


}
