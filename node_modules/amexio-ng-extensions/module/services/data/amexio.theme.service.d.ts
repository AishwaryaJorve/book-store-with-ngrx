import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
export declare class AmexioThemeSwitcherService {
    private _http;
    constructor(_http: HttpClient);
    themeData: Rx.BehaviorSubject<any>;
    loadThemes(url: string): Observable<any>;
    switchTheme(theme: any): void;
}
