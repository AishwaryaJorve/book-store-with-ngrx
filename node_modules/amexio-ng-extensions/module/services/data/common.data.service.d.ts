import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class CommonDataService {
    private _http;
    filteredObject: any;
    zindex: number;
    constructor(_http: HttpClient);
    fetchData(serviceUrl: string, methodType: string): Observable<any>;
    uploadFile(serviceUrl: string, methodType: string, requestData: any): Observable<any>;
}
