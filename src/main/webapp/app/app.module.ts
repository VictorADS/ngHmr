
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { UIRouterModule } from 'ui-router-ng2';
import { Ng2Webstorage } from 'ng2-webstorage';

import { Ng4SharedModule } from './shared';
import { Ng4EntityModule } from './entities/entity.module';

import { ROUTES } from './app.state';
import { HomeComponent, homeState } from './home';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import {RouterModule, PreloadAllModules} from "@angular/router"
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    errorState,
    accessdeniedState
} from './layouts';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
        Ng2Webstorage.forRoot({ prefix: 'jhi'}),
        Ng4SharedModule,
        Ng4EntityModule,
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Ng4AppModule {}
