import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, tap } from "rxjs/operators";
import { Books } from "../model/books.model";
import { UserWithToken } from "../model/user-with-token.model";
import { User } from "../model/user.model";
import { DataService } from "./data.service";
import url from "../constant/Url";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  saveBook(booksData: Books) {
    console.log("Done");
    this.http.post("http://localhost:8080/addBook", booksData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  /**
   * reload page
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  /**
   * signup user and after successful signup render to addbooks.
   * @param userData
   */
  signUP(userData: User) {
    console.log(userData);
    this.http.post<UserWithToken>(url.SIGNUP_URL, userData).subscribe(
      (response: any) => {
        //success

        //fetch user id and and token from response
        let currentUser = response.user;
        let token = response.token;

        console.log(currentUser);

        // //save current user with token
        // this.dataService.saveUser(currentUser);

        //save token in localstorage
        // this.dataService.saveToken(token);

        // after successful render on showbooks
        this.router.navigate(["../addbook"], { relativeTo: this.route });
      },
      (error) => {
        //error
        alert("user has alredy exits");
        this.reloadCurrentRoute();
      }
    );
  }
}
