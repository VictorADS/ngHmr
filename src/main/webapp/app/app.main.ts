import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { Ng4AppModule } from './app.module';

ProdConfig();
if(module['hot']){
    module['hot'].accept();
}
export function main() {
    return platformBrowserDynamic().bootstrapModule(Ng4AppModule);
}

if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}

