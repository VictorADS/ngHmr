import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { Ng4AppModule } from './app.module';

ProdConfig();
if(module['hot']){
    module['hot'].accept();
    console.log("J e fais quelque chose");
}
platformBrowserDynamic().bootstrapModule(Ng4AppModule);
