import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Books } from "src/app/model/books.model";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { v4 as uuid } from "uuid";
import { updateBook } from "../state/book.action";
import { getBooks, getUser } from "../state/book.selectors";
@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookData: Books;
  formAdded = false;
  bookInComingData: Books;
  user: User;
  books: Books[];
  constructor(
    private booksService: BooksService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.addBookForm = this.fb.group({
      bookName: ["", Validators.required],
      authorName: ["", Validators.required],
      discription: ["", Validators.required],
    });
  }

  /**
   * add book
   */
  onClickAddBook() {
    // copy form filled data in 'bookInComingdata' variable
    this.bookInComingData = this.addBookForm.value;

    //set unique bookId using uuid
    let bookId = uuid();
    this.store.select(getUser).subscribe((data) => {
      this.user = data;
    });
    this.store.select(getBooks).subscribe((data) => {
      this.books = data;
    });
    console.log(this.user);
    // create Books object with all data
    let book = {
      bookId: bookId,
      bookName: this.bookInComingData.bookName,
      authorName: this.bookInComingData.authorName,
      discription: this.bookInComingData.discription,
    };

    //add new incoming book in user.book array
    const updatableBooks: Books[] = [...this.books, book];

    console.log(updatableBooks);

    const updatableUser = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName,
      this.user.userName,
      this.user.password,
      updatableBooks
    );

    console.log(this.user);

    this.store.dispatch(updateBook({ user: updatableUser }));
    this.router.navigate(["../../book/showbooks"]);
  }
}
