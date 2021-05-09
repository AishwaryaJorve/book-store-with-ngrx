import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = "auth";

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getBooksFromAuthState = createSelector(getAuthState, (state) => {
  console.log(state);
  return state.user.books;
});

// export const SHARED_STATE_NAME = "shared";
// const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

// export const getErrorMessage = createSelector(getSharedState, (state) => {
//   console.log(state);
//   return state.errorMessage;
// });
