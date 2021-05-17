import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Login } from "../model/login.model";
import { DataService } from "./data.service";
import url from "../constant/Url";
import { UserWithToken } from "../model/user-with-token.model";
import { Observable } from "rxjs";
import { User } from "../model/user.model";
import { ConnectableObservable } from "rxjs";
import { publish } from "rxjs/operators";
import { SignUp } from "../model/signup.model";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login(userName, password): Observable<UserWithToken> {
    console.log("authService");
    // console.log(loginData);
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "No-Auth": "True",
    });
    return this.http.post<UserWithToken>(
      url.LOGIN_URL,
      { userName, password },
      {
        headers: reqHeader,
        responseType: "json",
      }
    );
  }

  signUp(firstName, lastName, userName, password, books): Observable<UserWithToken> {
    let signUpData = { firstName, lastName, userName, password, books };
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "No-Auth": "True",
    });
    return this.http.post<UserWithToken>(url.SIGNUP_URL, signUpData, {
      headers: reqHeader,
      responseType: "json",
    });
  }

  formatUser(responseOfLogin: UserWithToken): User {
    console.log("hii");
    var user: User = responseOfLogin.user;
    const userObject = new User(
      user.id,
      user.firstName,
      user.lastName,
      user.userName,
      user.password,
      user.books
    );
    this.setTokenLocalStorage(responseOfLogin.token);
    return userObject;
  }

  setTokenLocalStorage(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  getErrorMessage(errorCode: any): any {
    switch (errorCode) {
      case 400:
        return "Enter valid data(bad req)";

      case 401:
        return "Invalid credentials";

      case 404:
        return "Page not found";

      case 406:
        return "Data not acceptable...Email already exists..";

      case 500:
        return "Internal Server Error";

      default:
        "Unknown error..Plz try again";
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem("userData", JSON.stringify(user));
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const user = new User(
        userData.id,
        userData.firstName,
        userData.lastName,
        userData.userName,
        userData.password,
        userData.books
      );
      return user;
    }
    return null;
  }

  logOut() {
    localStorage.removeItem("userData");
  }
}

// login(userName: string, password: string): any {
//   return this.http.post(url.LOGIN_URL, { userName, password });
// }

/**
 * reload page
 */
// reloadCurrentRoute() {
//   let currentUrl = this.router.url;
//   this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
//     this.router.navigate([currentUrl]);
//   });
// }

/**
 * with passing login data fetch token from backend
 * @param loginData
 */
// fetchTokenFromAPI(loginData: Login): any {
//   var reqHeader = new HttpHeaders({
//     "Content-Type": "application/json",
//     "No-Auth": "True",
//   });
//   return this.http
//     .post(url.LOGIN_URL, loginData, {
//       headers: reqHeader,
//       responseType: "json",
//     })
//     .subscribe(
//       (response: any) => {
//         //success

//         //fetch user id and and token from response
//         let currentUser = response.user;
//         let token = response.token;

//         //save current user with token
//         this.dataService.saveUser(currentUser);

//         //save token in localstorage
//         this.dataService.saveToken(token);

//         // this.router.navigate(["../dashboard"], { relativeTo: this.route });
//         this.router.navigate(["../showbooks"], { relativeTo: this.route });
//       },
//       (error) => {
//         //error
//         alert("Enter valid username and password");

//         //after getting error reload same login page.
//         this.reloadCurrentRoute();
//       }
//     );
// }
