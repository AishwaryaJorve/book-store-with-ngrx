import { createReducer, on } from "@ngrx/store";
import { loadBookSuccess, updateBookSuccess } from "./book.action";
import { initialState } from "./book.state";

const _bookReducer = createReducer(
  initialState,
  on(updateBookSuccess, (state, action) => {
    return {
      ...state,
      books: action.user.books,
    };
  }),
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
