import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Books } from "src/app/model/books.model";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { v4 as uuid } from "uuid";
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
  constructor(
    private booksService: BooksService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
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

    // create Books object with all data
    let book: Books = new Books(
      bookId,
      this.bookInComingData.bookName,
      this.bookInComingData.authorName,
      this.bookInComingData.discription
    );

    // update books array of user in localstorage
    let user = this.dataService.saveBook(book);

    // using book service call to backend to update data.
    // this.booksService.updateBook(user);

    // again save updated user's(book) in localstorage.
    this.dataService.saveUser(user);

    // navigate to showbooks
    this.router.navigate(["../showbooks"], { relativeTo: this.route });
  }
}
