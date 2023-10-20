import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import './polyfills';

enableProdMode();
console.log("HIiiiiiiiiiiiiiiiiiiiiiii");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
