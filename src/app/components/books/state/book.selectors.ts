import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../../auth/state/auth.state";
import { bookState } from "./book.state";

export const BOOK_STATE_NAME = "user";

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getBookState = createFeatureSelector<AuthState>(BOOK_STATE_NAME);

export const getBook = createSelector(getBookState, (state) => {
  return state.user.books;
});
