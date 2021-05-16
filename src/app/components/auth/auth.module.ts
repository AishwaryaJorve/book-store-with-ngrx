import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioLayoutModule,
  AmexioMapModule,
  AmexioWidgetModule,
} from "amexio-ng-extensions";
import { AuthGuard } from "src/app/service/auth.guard";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthEffects } from "./state/auth.effetcs";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selectors";

const routes: Routes = [
  // if anyone try to fetch "http://localhost:4200/auth" like then there is no page
  //for only auth so it will redirect to login
  { path: "", redirectTo: "login" },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "signup",
    component: SignUpComponent,
    pathMatch: "full",
  },
];

// const routes: Routes = [
//   {
//     path: "", //here default means "auth"
//     children: [
//       // if anyone try to fetch "http://localhost:4200/auth" like then there is no page
//       //for only auth so it will redirect to login
//       { path: "", redirectTo: "login" },
//       {
//         path: "login",
//         component: LoginComponent,
//         pathMatch: "full",
//       },
//       {
//         path: "signup",
//         component: SignUpComponent,
//         pathMatch: "full",
//       },
//     ],
//   },
// ];

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AmexioChartsModule,
    AmexioWidgetModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AmexioLayoutModule,
    EffectsModule.forFeature(),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
