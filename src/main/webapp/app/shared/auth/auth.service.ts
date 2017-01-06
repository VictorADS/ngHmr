import { Injectable } from '@angular/core';

import { LoginModalService } from '../login/login-modal.service';
import { Principal } from './principal.service';
import { StateStorageService } from './state-storage.service';

@Injectable()
export class AuthService {

    constructor(
        private principal: Principal,
        private stateStorageService: StateStorageService,
        private loginModalService: LoginModalService,
    ) {}

    authorize (force) {

    }
}
