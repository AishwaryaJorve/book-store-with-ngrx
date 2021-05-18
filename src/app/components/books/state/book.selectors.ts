import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { AUTH_STATE_NAME } from "../../auth/state/auth.selectors";
import { BookState } from "./book.state";

export const BOOK_STATE_NAME = "books";

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getBookState = createFeatureSelector<BookState>(BOOK_STATE_NAME);

export const getBooks = createSelector(getBookState, (state) => {
  return state.books;
});

const getAuthState = createFeatureSelector<AppState>(AUTH_STATE_NAME);

export const getUser = createSelector(getAuthState, (state) => {
  console.log(state + "from book selector");
  return state.authState.user;
});
