import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddBookComponent } from "./components/books/add-book/add-book.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/auth/login/login.component";
// import { UpdateBookComponent } from "./components/books/show-books/update-book/update-book.component";
import { SignUpComponent } from "./components/auth/sign-up/sign-up.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AuthModule } from "./components/auth/auth.module";
import { ShowBooksComponent } from "./components/books/show-books/show-books.component";
import { BookModule } from "./components/books/book.module";
const appRoutes: Routes = [
  {
    path: "auth",
    loadChildren: () => AuthModule,
  },
  {
    path: "book",
    loadChildren: () => BookModule,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full",
  },
  {
    path: "",
    component: DashboardComponent,
    pathMatch: "full",
  },

  { path: "error-page", component: ErrorPageComponent },
  {
    path: "**",
    redirectTo: "error-page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
