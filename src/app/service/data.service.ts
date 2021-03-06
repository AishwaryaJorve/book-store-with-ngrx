import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getBooks, getUser } from "../components/books/state/book.selectors";
import { Books } from "../model/books.model";
import { UserWithToken } from "../model/user-with-token.model";
import { User } from "../model/user.model";
import { AppState } from "../store/app.state";
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private store: Store<AppState>) {}

  /**
   * delete book of incoming id from user
   * @param bookId
   * @returns user
   */
  deleteBookInUser(bookId: string) {
    let user: User;
    let booksFromState = [];
    this.store.select(getUser).subscribe((data) => {
      user = data;
    });

    this.store.select(getBooks).subscribe((data) => {
      booksFromState = data
    })

    console.log(booksFromState);

    //iterate books and match bookId and delete that book
    for (let i = 0; i < booksFromState.length; i++) {
      if (booksFromState[i].bookId === bookId) {
        booksFromState.splice(i, 1);
      }
    }

    // After delete perticular book from 'booksFromState' then set this in user.books
    user.books = booksFromState;
    console.log(booksFromState);
    // after deleted book.. if books length became < 0 then byfefault it will be null so set as empty array
    if (booksFromState.length <= 0) {
      user.books = [];
    }
    return user;
  }

  /**
   * update incoming book in user
   * @param book
   * @returns user
   */
  updateBookInUser(book: Books) {
    let user: User;
    let books: Books[];
    //get updated book always
    this.store.select(getBooks).subscribe((data) => {
      books = data;
    });

    this.store.select(getUser).subscribe((data) => {
      user = data;
    });

    for (let i = 0; i < books.length; i++) {
      if (books[i].bookId == book.bookId) {
        // update new data with old
        books[i].authorName = book.authorName;
        books[i].discription = book.discription;
        user.books = [...books];
      }
    }
    return user;
  }
}
