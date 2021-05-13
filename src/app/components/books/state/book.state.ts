import { Books } from "src/app/model/books.model";
import { AppState } from "src/app/store/app.state";

export interface bookState {
  book: Books[];
}

export const initialState: bookState = {
  book: null,
};
