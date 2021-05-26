import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Books } from "../model/books.model";
import { map } from "rxjs/operators";
import { User } from "../model/user.model";
import { DataService } from "./data.service";
import url from "../constant/Url";
import { Observable } from "rxjs";
import { UserWithToken } from "../model/user-with-token.model";
@Injectable({
  providedIn: "root",
})
export class BooksService implements OnInit {
  allBooks: Books[] = [];

  id: any;
  url = "http://localhost:8080/delete";

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit() {
    console.log(this.allBooks);
  }

  getToken() {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    return token;
  }

  /**
   * Get all books
   * @param id
   * @returns
   */
  getAllBooks(id: string): Observable<Books[]> {
    let token = this.getToken();
    return this.http
      .get<Books[]>(url.FETCH_BOOK_URL + "/" + id, {
        headers: new HttpHeaders().set("AuthorizedToken", token),
      })
      .pipe(
        map((data) => {
          const books: Books[] = [];
          for (let key in data) {
            books.push({ ...data[key] });
          }
          return books;
        })
      );
  }

  /**
   * update book implementation
   * @param user
   * @returns
   */
  updateBook(user: User): any {
    console.log(user);
    const userToUpdate = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      password: user.password,
      books: user.books,
    };
    let token = this.getToken();
    return this.http.put(url.UPDATE_BOOK_URL + "/" + user.id, userToUpdate, {
      headers: new HttpHeaders().set("AuthorizedToken", token),
    });
  }
}
