// import { Injectable } from "@angular/core";
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
// import { Observable } from "rxjs";
// import { DataService } from "./data.service";
// import { AuthService } from "./auth.service";

// @Injectable({
//   providedIn: "root",
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private dataService: DataService
//   ) {}

//   // canActivate(
//   //   next: ActivatedRouteSnapshot,
//   //   state: RouterStateSnapshot
//   // ): Observable<boolean> | Promise<boolean> | boolean {
//   //   if (this.dataService.isLoggedIn()) {
//   //     return true;
//   //   } else {
//   //     this.router.navigate(["../login"]);
//   //     return false;
//   //   }
//   // }
// }
