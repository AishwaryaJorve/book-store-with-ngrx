import { createReducer, on } from "@ngrx/store";
import { addBook } from "./book.action";
import { initialState } from "./book.state";

const _bookReducer = createReducer(
  initialState,
  on(addBook, (state, action) => {
    let book = { ...action.book };
    return {
      ...state,
      book: [...state.book, book],
    };
  })
);

export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
