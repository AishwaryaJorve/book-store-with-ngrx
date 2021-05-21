import { createAction, props } from "@ngrx/store";
import { Books } from "src/app/model/books.model";
import { User } from "src/app/model/user.model";

export const UPDATE_BOOK = "[book page] add book";
export const UPDTE_BOOK_SUCCESS = "[book page] add book success";

export const LOAD_BOOK = "[book page] load book";
export const LOAD_BOOK_SUCCESS = "[book page] load book success";

// With action pass props of types Books
export const updateBook = createAction(UPDATE_BOOK, props<{ user: User }>());
export const updateBookSuccess = createAction(UPDTE_BOOK_SUCCESS, props<{ user: User }>());

export const loadAllBooks = createAction(LOAD_BOOK, props<{ id: string }>());

export const loadBookSuccess = createAction(LOAD_BOOK_SUCCESS, props<{ books: Books[] }>());
