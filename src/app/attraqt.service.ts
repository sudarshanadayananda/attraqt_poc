import { Injectable } from '@angular/core';
import * as xo from '@attraqt/xo-js';

@Injectable({
  providedIn: 'root',
})
export class AttraqtService {
  constructor() {
    xo.activity.init({
      trackerKey: '5eb7c180-3b22-4320-b26f-3c704a80db45',
    });
  }

  optIn() {
    xo.activity.optIn();
  }

  optOut() {
    xo.activity.optOut();
  }

  search() {
    xo.search
      .query('T-Shirt', {
        offset: 10,
        limit: 30,
        filter: 'price < 50',
      })
      .then((response) => {
        console.log('Search 1: ', JSON.stringify(response, null, 2));
      })
      .catch((error: any) => {
        console.log(error);
        console.log('Search 2: ', JSON.stringify(error, null, 2));
      });
  }

  sendActivity(activity: any) {
    xo.activity.send(activity);
  }
}
