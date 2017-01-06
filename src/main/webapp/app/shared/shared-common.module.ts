import { NgModule } from '@angular/core';

import {
    Ng4SharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    alertServiceProvider,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        Ng4SharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        alertServiceProvider()
    ],
    exports: [
        Ng4SharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class Ng4SharedCommonModule {}
