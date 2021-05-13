import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ShowBooksComponent } from "./show-books/show-books.component";
import { BookEffects } from "./state/book.effects";
import { bookReducer } from "./state/book.reducer";

import { BOOK_STATE_NAME } from "./state/book.selectors";

const routes: Routes = [
  {
    path: "showbooks",
    component: ShowBooksComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [ShowBooksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(BOOK_STATE_NAME, bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookModule {}
