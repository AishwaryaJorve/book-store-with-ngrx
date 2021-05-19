import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { BooksService } from "src/app/service/books.service";
import { addBook, loadAllBooks, loadBookSuccess } from "./book.action";

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BooksService) {}

  loadBooks$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(loadAllBooks),
      mergeMap((action) => {
        return this.bookService.getAllBooks(action.id).pipe(
          map((books) => {
            return loadBookSuccess({ books });
          })
        );
      })
    );
  });

  addBook$ = createEffect(
    (): any => {
      return this.action$.pipe(
        ofType(addBook),
        mergeMap((action) => {
          console.log(action.user);
          return this.bookService.updateBook(action.user).pipe(
            map((data) => {
              console.log(data);
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
