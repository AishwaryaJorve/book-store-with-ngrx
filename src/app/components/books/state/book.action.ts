import { createAction, props } from "@ngrx/store";
import { Books } from "src/app/model/books.model";

export const ADD_BOOK_ACTION = "[book page] add book";
export const LOAD_BOOK_SUCCESS = "[book page] load book success";

// With action pass props of types Books
export const addBook = createAction(ADD_BOOK_ACTION, props<{ book: Books[] }>());

export const loadAllBooks = createAction(LOAD_BOOK_SUCCESS, props<{ id: string }>());

// export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string }>());
