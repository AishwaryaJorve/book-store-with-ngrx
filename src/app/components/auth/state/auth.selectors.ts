import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = "auth";

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getBooksFromAuthState = createSelector(getAuthState, (state) => {
  console.log("Hello from auth selector");
  // return state.user.books;
});

// export const getUser = createSelector(getAuthState, (state) => {
//   console.log(state);
//   return state.user;
// });
