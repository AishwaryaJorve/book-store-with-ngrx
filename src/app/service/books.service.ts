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

  // signUp(firstName, lastName, userName, password, books): Observable<UserWithToken> {
  //   let signUpData = { firstName, lastName, userName, password, books };
  //   var reqHeader = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     "No-Auth": "True",
  //   });
  //   return this.http.post<UserWithToken>(url.SIGNUP_URL, signUpData, {
  //     headers: reqHeader,
  //     responseType: "json",
  //   });
  // }

  /**
   * fetch all books of user using user id
   * @param id
   * @returns
   */
  // fetchAllBooksFromAPI(id: string): any {
  //   let allBooks: any = [];
  //   let token = localStorage.getItem("token");
  //   this.http
  //     .get<{ [data: string]: Books }>(
  //       url.FETCH_BOOK_URL + "/" + id,
  //       {
  //         headers: new HttpHeaders().set(
  //           "AuthorizedToken",
  //           token
  //         ),
  //       }
  //     )
  //     .pipe(
  //       map((responseData) => {
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             allBooks.push({
  //               ...responseData[key],
  //               k: key,
  //             });
  //           }
  //         }
  //         return allBooks;
  //       })
  //     )
  //     .subscribe((allBooks) => {
  //       console.log(allBooks);
  //     });
  //   return allBooks;
  // }

  /**
   * delete book from localstorage and send updated user
   * @param bookId
   * @returns user
   */
  // deleteBookById(bookId:string){

  //   //get current user from localstorage
  //   let user=this.dataService.getUser();

  //   //get books form user
  //   let books=user.books;

  //   //iterate books and match bookId and delete that book
  //   for(let i=0;i<books.length;i++){
  //     if(books[i].bookId===bookId){
  //       books.splice(i,1);
  //     }
  //   }

  //   // after deleted book.. if books length became < 0 then byfefault it will be null so set as empty array
  //   if(books.length<=0){
  //     user.books=[];
  //   }
  //   return user;
  // }

  /**
   * update book, add book ,delete book using backend API.
   * @param user
   */
  // updateBook(user:User){
  //   let token=localStorage.getItem("token");
  //       this.http.put(url.UPDATE_BOOK_URL+"/"+user.id,user,{
  //         headers: new HttpHeaders().set('AuthorizedToken',token)
  //       })
  //   .subscribe((responseData) => {
  //     console.log(responseData);
  //   });
  // }
}
