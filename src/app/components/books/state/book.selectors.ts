import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookState } from "./book.state";

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getBookState = createFeatureSelector<bookState>("book");

export const getBook = createSelector(getBookState, (state) => {
  return state.book;
});
