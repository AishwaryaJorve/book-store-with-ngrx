import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Books } from "src/app/model/books.model";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { v4 as uuid } from "uuid";
import { AuthState } from "../../auth/state/auth.state";
import { addBook } from "../state/book.action";
import { getUser } from "../state/book.selectors";
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
  constructor(
    private booksService: BooksService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log("addbook");

    console.log(this.user);
    // console.log("hello" + this.user);
    this.addBookForm = this.fb.group({
      bookName: ["", Validators.required],
      authorName: ["", Validators.required],
      discription: ["", Validators.required],
    });
  }

  // onClick save book call to the service function
  onClickAddBook() {
    // copy form filled data in 'bookInComingdata' variable
    this.bookInComingData = this.addBookForm.value;
    let bookId = uuid();
    this.store.select(getUser).subscribe((data) => {
      this.user = data;
    });
    // create Books object with all data
    let book: Books = new Books(
      bookId,
      this.bookInComingData.bookName,
      this.bookInComingData.authorName,
      this.bookInComingData.discription
    );

    const updatableBooks: Books[] = [...this.user.books, book];

    const updatableUser = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName,
      this.user.userName,
      this.user.password,
      updatableBooks
    );

    this.store.dispatch(addBook({ user: updatableUser }));

    // update books array of user in localstorage
    // let user = this.dataService.saveBook(book);

    // using book service call to backend to update data.
    // this.booksService.updateBook(user);

    // again save updated user's(book) in localstorage.
    // this.dataService.saveUser(user);

    // navigate to showbooks
    // this.router.navigate(["../showbooks"], { relativeTo: this.route });
  }
}
