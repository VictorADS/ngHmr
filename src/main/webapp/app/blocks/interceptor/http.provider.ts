import { Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { EventManager } from 'ng-jhipster';

import { HttpInterceptor } from './http.interceptor';
import { StateStorageService } from '../../shared/auth/state-storage.service';
import { AuthExpiredInterceptor } from './auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './errorhandler.interceptor';
import { NotificationInterceptor } from './notification.interceptor';

export const customHttpProvider = () => ({
    provide: Http,
    useFactory: (
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        injector: Injector,
        stateStorageService: StateStorageService,
        eventManager: EventManager
    ) => new HttpInterceptor(
        backend,
        defaultOptions,
        [
            new AuthExpiredInterceptor(injector, stateStorageService),
            // Other interceptors can be added here
            new ErrorHandlerInterceptor(eventManager),
            new NotificationInterceptor()
        ]
    ),
    deps: [
        XHRBackend,
        RequestOptions,

        Injector,
        StateStorageService,
        EventManager
    ]
});
