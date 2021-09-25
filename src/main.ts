import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { ImagePathGettingService } from './app/services/image-path-getting.service'

if (environment.production) {
  enableProdMode();
}

// let img = new Image();
// let failure = function(){console.log(`failure`)}
// let succ = function(){console.log('success')}
// img.onload = succ;
// img.onerror = failure;
// let getter = new ImagePathGettingService();
// // img.src = test
// document.getElementsByTagName('body')[0].appendChild(img)

// async function test(){
//   return await getter.getImagePath('myPhoto.png', 0)
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
