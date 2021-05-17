import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { BooksService } from "src/app/service/books.service";
import { loadAllBooks } from "./book.action";

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BooksService) {}

  loadBooks$ = createEffect(
    (): any => {
      return this.action$.pipe(
        ofType(loadAllBooks),
        mergeMap((action) => {
          return this.bookService.getAllBooks(action.id).pipe(
            map((data) => {
              console.log(data);
              return data;
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
