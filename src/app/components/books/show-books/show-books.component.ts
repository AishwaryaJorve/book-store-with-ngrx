import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Books } from "src/app/model/books.model";
import { UserWithToken } from "src/app/model/user-with-token.model";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { getBooksFromAuthState } from "../../auth/state/auth.selectors";
import { addBook, loadAllBooks } from "../state/book.action";
import { getBooks, getUser } from "../state/book.selectors";
@Component({
  selector: "app-show-books",
  templateUrl: "./show-books.component.html",
  styleUrls: ["./show-books.component.css"],
})
export class ShowBooksComponent implements OnInit {
  searchData: string;
  bookNameForSearch: string = "";
  allBooks: Observable<Books[]>;
  user: Observable<User>;
  updateBook: boolean = false;
  bookToUpdateWithAllData: Books;
  idOfLoggedInUser: string;

  confirmdialoguematerial: boolean;
  confirmdialoguenonmaterial: boolean;
  constructor(
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log("in showbooks component");
    //when load page should display all book
    this.fetchBooksFromUser();
    //Whatever we want to get from store  have to give call to selector
    // this.allBooks = this.store.select(
    //   getBooksFromAuthState
    // );
    this.findIdOfLoggedInUser();
    console.log(this.idOfLoggedInUser);
    // this.store.dispatch(customIncrement({ value: +this.value }));

    this.store.dispatch(loadAllBooks({ id: this.idOfLoggedInUser }));
    this.user = this.store.select(getUser);
    this.allBooks = this.store.select(getBooks);
  }

  findIdOfLoggedInUser() {
    const userDataString = localStorage.getItem("userData");
    let userData = JSON.parse(userDataString);
    this.idOfLoggedInUser = userData.id.toString();
  }

  /**
   * fetch books from user(localstorage)
   */
  fetchBooksFromUser() {
    // call to getUser method of dataservice to get user from localStorage.
    console.log("fetchBooksFromUser");
    this.store.select(getBooksFromAuthState);
  }

  onDeleteClickDeleteBook(bookId: string) {
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

    alert("Are you Sure to delete this book");
    this.store.dispatch(addBook({ user: user }));

    this.reloadCurrentRoute();
  }

  /**
   * reload same page code.
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onUpdateClick(bookToUpdateWithAllData: Books) {
    this.bookToUpdateWithAllData = bookToUpdateWithAllData;
    this.updateBook = true;
    console.log("on updateClick");
  }
}
