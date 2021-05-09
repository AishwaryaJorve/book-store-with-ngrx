import { ModuleWithProviders } from '@angular/core';
export * from '../services/data/common.data.service';
export * from '../services/device/device.query.service';
export * from './sidenav/sidenav.component';
export * from './sidenav/sidenavnode.component';
export * from './navbar/navbar.component';
export * from './notification/notification.component';
export * from './taskbar/taskbar-item/taskbar-item.component';
export * from './taskbar/taskbar.component';
export declare class AmexioNavModule {
    static forRoot(): ModuleWithProviders;
}
