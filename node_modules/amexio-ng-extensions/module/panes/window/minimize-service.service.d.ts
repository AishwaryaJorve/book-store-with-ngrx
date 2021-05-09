import { Observable } from 'rxjs';
export declare class MinimizeService {
    cureentWidnowData: any[];
    private messageSource;
    currentMessage: Observable<any>;
    constructor();
    onMinimizeClick(itemData: any): void;
    onCloseClick(data: any): void;
}
