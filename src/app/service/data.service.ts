import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getUser } from "../components/books/state/book.selectors";
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
   * save token in localstorage
   * @param token
   */
  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  saveUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  deleteBookInUser(bookId: string) {
    let user: User;
    this.store.select(getUser).subscribe((data) => {
      user = data;
    });

    //get books form user
    let books = user.books;

    //iterate books and match bookId and delete that book
    for (let i = 0; i < books.length; i++) {
      if (books[i].bookId === bookId) {
        books.splice(i, 1);
      }
    }

    // after deleted book.. if books length became < 0 then byfefault it will be null so set as empty array
    if (books.length <= 0) {
      user.books = [];
    }
    return user;
  }

  /**
   * update book
   * @param book
   */
  updateBookInUser(book: Books) {
    let user: User;

    this.store.select(getUser).subscribe((data) => {
      user = data;
    });

    //fetch books from user
    let books = user.books;

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

  /**
   * fetch user from localstorage.
   * @returns user
   */
  getUser() {
    let user = <User>JSON.parse(localStorage.getItem("user"));
    return user;
  }

  /**
   * fetch token from localstorage.
   * @returns token
   */
  getToken() {
    let token = localStorage.getItem("token");
    return token;
  }

  /**
   * to check is user log in or not with fetching token from localstorage
   * @returns
   */
  isLoggedIn() {
    //fetch token from localstorage
    let token = localStorage.getItem("token");
    if (token == undefined || token === "" || token == null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * to logout user with removing token from localstorage
   * @returns
   */
  logout() {
    localStorage.clear();
    return true;
  }
}
