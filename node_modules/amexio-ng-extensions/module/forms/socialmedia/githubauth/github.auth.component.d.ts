import { EventEmitter, OnInit } from '@angular/core';
import { SocialBaseComponent } from './../social.base.component';
export declare class GithubAuthComponent extends SocialBaseComponent implements OnInit {
    isCircle: boolean;
    onLogin: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    loginToGithub(e: any): void;
}
