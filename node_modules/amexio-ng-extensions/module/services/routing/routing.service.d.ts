import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
export declare class RouterService {
    routerEvent: BehaviorSubject<any>;
    initializeRouter(router: Router): void;
}
