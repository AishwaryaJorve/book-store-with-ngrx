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
import { updateBook } from "../../state/book.action";
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
    private router: Router,
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
   * update book
   */
  onUpdateBook() {
    //save form data in bookInComingData variable
    this.bookInComingData = this.updateBookForm.value;

    //create object of Books with updated data
    let book: Books = new Books(
      this.bookToUpdateWithAllData.bookId,
      this.bookToUpdateWithAllData.bookName,
      this.bookInComingData.authorName,
      this.bookInComingData.discription
    );
    this.user = this.dataService.updateBookInUser(book);
    console.log(this.user);

    this.store.dispatch(updateBook({ user: this.user }));
    alert("Book updated successfully");
    this.reloadCurrentRoute();
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
