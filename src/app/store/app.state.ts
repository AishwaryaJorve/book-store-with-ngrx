import { bookReducer } from "../components/books/state/book.reducer";
import { bookState } from "../components/books/state/book.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  book: bookState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  book: bookReducer,
};
