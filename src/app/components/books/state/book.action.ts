import { createAction, props } from "@ngrx/store";
import { Books } from "src/app/model/books.model";

export const ADD_BOOK_ACTION = "[book page] add book";

// With action pass props of types Books
export const addBook = createAction(ADD_BOOK_ACTION, props<{ book: Books }>());
