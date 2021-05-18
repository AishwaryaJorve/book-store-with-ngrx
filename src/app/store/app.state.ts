import { AuthReducer } from "../components/auth/state/auth.reducer";
import { AuthState } from "../components/auth/state/auth.state";
import { bookReducer } from "../components/books/state/book.reducer";
import { BookState } from "../components/books/state/book.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  book: BookState;
  authState: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  book: bookReducer,
  auth: AuthReducer,
};
