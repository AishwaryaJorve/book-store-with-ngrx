import { Books } from "src/app/model/books.model";

export interface bookState {
  book: Books[];
}

export const initialState: bookState = {
  book: [
    {
      bookId: "",
      bookName: "",
      authorName: "",
      discription: "",
    },
  ],
};
