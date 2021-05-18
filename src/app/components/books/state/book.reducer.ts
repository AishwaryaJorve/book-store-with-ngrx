import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { addBook, loadAllBooks, loadBookSuccess } from "./book.action";
import { initialState } from "./book.state";

const _bookReducer = createReducer(
  initialState,
  on(loadBookSuccess, (state, action) => {
    return {
      ...state,
      books: action.books,
    };
  })
);

export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
