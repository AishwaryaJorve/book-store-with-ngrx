import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { addBook, allBooks } from "./book.action";
import { initialState } from "./book.state";

const _bookReducer = createReducer(
  initialState
  // on(addBook, (state, action) => {
  //   let book = { ...action.book };
  //   return {
  //     ...state,
  //     book: [...state.book, book],
  //   };
  // })
  // on(allBooks,(state)=>{
  //   return {
  //     ...state
  //   }
  // })
);

export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
