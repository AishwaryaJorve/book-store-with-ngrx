import { createReducer, on } from "@ngrx/store";
import { addBookSuccess, loadBookSuccess } from "./book.action";
import { initialState } from "./book.state";

const _bookReducer = createReducer(
  initialState,
  // on(addBookSuccess, (state, action) => {
  //   let books = { ...action.user};
  //   return {
  //     ...state,
  //     books: { ...state.books, user},
  //   };
  // }),
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
