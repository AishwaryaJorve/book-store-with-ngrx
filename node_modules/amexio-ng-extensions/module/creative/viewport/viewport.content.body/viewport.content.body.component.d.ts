import { OnInit } from '@angular/core';
import { AmexioNavBarComponent } from '../../../navigation/navbar/navbar.component';
export declare class ViewportContentBodyComponent implements OnInit {
    navTemplate: AmexioNavBarComponent;
    scrollable: boolean;
    navbarOpacity: boolean;
    roundedgeclass: string;
    constructor();
    ngOnInit(): void;
    setRoundEdge(type: any): void;
}
