import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { loadAllBooks, loadBookSuccess, updateBook, updateBookSuccess } from "./book.action";

@Injectable()
export class BookEffects {
  constructor(
    private action$: Actions,
    private bookService: BooksService,
    private router: Router
  ) {}

  loadBooks$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(loadAllBooks),
      mergeMap((action) => {
        return this.bookService.getAllBooks(action.id).pipe(
          map((books) => {
            console.log("load book");
            return loadBookSuccess({ books });
          })
        );
      })
    );
  });

  /**
   * Add book Effect
   */
  updateBook$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(updateBook),
      mergeMap((action) => {
        console.log(action.user);
        return this.bookService.updateBook(action.user).pipe(
          map((user: User) => {
            console.log("from effects update book");
            return updateBookSuccess({ user: user });
          })
        );
      })
    );
  });
}
