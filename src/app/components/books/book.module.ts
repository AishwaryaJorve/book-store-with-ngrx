import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
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
import { NavbarComponent } from "../navbar/navbar.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { ShowBooksComponent } from "./show-books/show-books.component";
import { UpdateBookComponent } from "./show-books/update-book/update-book.component";
import { BookEffects } from "./state/book.effects";
import { bookReducer } from "./state/book.reducer";

import { BOOK_STATE_NAME } from "./state/book.selectors";

const routes: Routes = [
  { path: "", redirectTo: "showbooks" },
  {
    path: "showbooks",
    component: ShowBooksComponent,
    pathMatch: "full",
  },
  {
    path: "updatebook/:id",
    component: UpdateBookComponent,
    pathMatch: "full",
  },
  {
    path: "addbook",
    component: AddBookComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [ShowBooksComponent, UpdateBookComponent, NavbarComponent, AddBookComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AmexioChartsModule,
    AmexioWidgetModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AmexioLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(BOOK_STATE_NAME, bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookModule {}
