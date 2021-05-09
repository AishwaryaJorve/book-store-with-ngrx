import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Books } from "src/app/model/books.model";
import { UserWithToken } from "src/app/model/user-with-token.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { getBooksFromAuthState } from "../../auth/state/auth.selectors";
@Component({
  selector: "app-show-books",
  templateUrl: "./show-books.component.html",
  styleUrls: ["./show-books.component.css"],
})
export class ShowBooksComponent implements OnInit {
  searchData: string;
  bookNameForSearch: string = "";
  allBooks: Observable<Books[]>;
  updateBook: boolean = false;
  bookToUpdateWithAllData: Books;

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
    //when load page should display all book
    this.fetchBooksFromUser();
  }

  /**
   * fetch books from user(localstorage)
   */
  fetchBooksFromUser() {
    // call to getUser method of dataservice to get user from localStorage.
    this.allBooks = this.store.select(getBooksFromAuthState);
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

  /**
   * dalete book using bookid
   * @param bookId
   */
  onDeleteClickDeleteBook(bookId: any) {
    //delete book by bookId from localStorage and get perticular book deleted user
    let user = this.bookService.deleteBookById(bookId);

    //using updateBook method of bookService backend call for delete from DB.
    this.bookService.updateBook(user);

    //after delete book again store fresh user in localstorage.
    this.dataService.saveUser(user);

    //after delete book agian reload same page.
    this.reloadCurrentRoute();
  }

  // comes id of book which to be update through button onclick
  onUpdateClick(bookToUpdateWithAllData: Books) {
    this.bookToUpdateWithAllData = bookToUpdateWithAllData;
    this.updateBook = true;
  }

  //called to the getBookByBookName() of the service method
  searchBookByName() {
    // this.allBooks = this.books.getBookByBookName(this.bookNameForSearch);
    console.log(this.allBooks);
  }
}