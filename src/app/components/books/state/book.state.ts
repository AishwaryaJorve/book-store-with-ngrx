import { Books } from "src/app/model/books.model";
import { AppState } from "src/app/store/app.state";

export interface BookState {
  books: Books[];
}

export const initialState: BookState = {
  books: null,
};
