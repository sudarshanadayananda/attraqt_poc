import { Component, OnInit } from '@angular/core';

import { AttraqtService } from './attraqt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private attraqtService: AttraqtService) {}

  ngOnInit(): void {}

  sendActivity() {
    const activity = {
      action: 'view',
      target: {
        page: '/site/search',
      },
      metadata: {
        locale: 'en_GB',
      },
    };
    this.attraqtService.sendActivity(activity);
  }

  optIn() {
    this.attraqtService.optIn();
  }

  optOut() {
    this.attraqtService.optOut();
  }

  search() {
    this.attraqtService.search();
  }
}
