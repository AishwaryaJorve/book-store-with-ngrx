import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AmexioLayoutModule, AmexioWidgetModule } from "amexio-ng-extensions";
import {
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioMapModule,
} from "amexio-ng-extensions";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { DashboardComponent } from "./components/shared/dashboard/dashboard.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BooksService } from "./service/books.service";
import { AddBookComponent } from "./components/books/add-book/add-book.component";
import { TranslocoRootModule } from "./transloco/transloco-root.module";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { DataService } from "./service/data.service";
import { AuthService } from "./service/auth.service";
import { SignupService } from "./service/signup.service";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { bookReducer } from "./components/books/state/book.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthReducer } from "./components/auth/state/auth.reducer";
import { SharedReducer } from "./store/shared/shared.reducer";
import { appReducer } from "./store/app.state";
import { AuthEffects } from "./components/auth/state/auth.effetcs";
import { UpdateBookComponent } from "./components/books/show-books/update-book/update-book.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddBookComponent,
    ErrorPageComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AmexioLayoutModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    // StoreModule.forRoot(AuthReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [BooksService, DataService, AuthService, SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
