import { Injectable } from '@angular/core';

declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apiKey = 'AIzaSyA_ci5sjI7vlVfTB8sqdt9FgAJF1ZLDAiE';
  mapsLoaded = false;

  constructor() { }

  init(renderer: any, document: any): Promise<any> {



    return new Promise((resolve) => {

      if (this.mapsLoaded) {
        console.log('google is preview loaded');
        resolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window['initMap'] = () => {
        this.mapsLoaded = true;
        if (google) {
          console.log('google is loaded');
        } else {
          console.log('google is not defined')
        }
        resolve(true);
        return;
      }

      if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=initMap';
        console.log(script.src);
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap';
      }
      console.log(script);
      console.log(document.body);
      renderer.appendChild(document.body, script);
    });

  }
}
