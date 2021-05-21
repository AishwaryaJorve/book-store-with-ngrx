import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Books } from "src/app/model/books.model";
import { User } from "src/app/model/user.model";
import { BooksService } from "src/app/service/books.service";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { addBook } from "../../state/book.action";
import { getUser } from "../../state/book.selectors";
import { ShowBooksComponent } from "../show-books.component";

@Component({
  selector: "app-update-book",
  templateUrl: "./update-book.component.html",
  styleUrls: ["./update-book.component.css"],
})
export class UpdateBookComponent implements OnInit {
  @Input() bookToUpdateWithAllData: Books;
  updateBookForm: FormGroup;
  formUpdated: boolean = false;
  bookInComingData: Books;
  paramsSubscription: Subscription;
  user: User;
  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private showBooks: ShowBooksComponent,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log(this.bookToUpdateWithAllData);
    this.updateBookForm = this.fb.group({
      authorName: ["", Validators.required],
      discription: ["", Validators.required],
    });
  }

  /**
   * give call to the updateBook method of service to update book.
   */
  onUpdateBook() {
    //save form data in bookInComingData variable
    this.bookInComingData = this.updateBookForm.value;

    this.store.select(getUser).subscribe((data) => {
      this.user = data;
    });

    //create object of Books with updated data
    let book: Books = new Books(
      this.bookToUpdateWithAllData.bookId,
      this.bookToUpdateWithAllData.bookName,
      this.bookInComingData.authorName,
      this.bookInComingData.discription
    );

    //fetch books from user
    let books = this.user.books;

    for (let i = 0; i < books.length; i++) {
      if (books[i].bookId == book.bookId) {
        // update new data with old
        books[i].authorName = book.authorName;
        books[i].discription = book.discription;
        this.user.books = [...books];
      }
    }

    console.log(this.user);

    this.store.dispatch(addBook({ user: this.user }));
    alert("Book updated successfully");
    this.reloadCurrentRoute();

    // updateBookInLocalStorage(book:Books){

    //   //fetch books from user
    //   let books=user.books

    //   //iterate books and matched already books id with incoming bookId to update
    //   for(let i=0;i<books.length;i++){
    //     if(books[i].bookId==book.bookId){

    //       // update new data with old
    //       books[i].authorName=book.authorName;
    //       books[i].discription=book.discription;
    //       user.books=[...books];
    //     }
    //   }
    //   return user;
    // }

    // // call updateBookInLocalStorage method to update book with new data
    let user = this.dataService.updateBookInLocalStorage(book);

    // //call to updateBook method to call backend.
    // // this.bookService.updateBook(user);

    // // after update book again save user(with updated book) in localstorage.
    // this.dataService.saveUser(user);

    // // after done all again reload page(will show all books with updation)
    // this.reloadCurrentRoute();

    // alert("Book updated successfully");
  }

  /**
   * after update book again show all books so reload book
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  /**
   * update form cancle button
   */
  onCancleUpdateBook() {
    this.reloadCurrentRoute();
  }
}
