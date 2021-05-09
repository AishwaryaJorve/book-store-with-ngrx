import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Login } from "src/app/model/login.model";
import { UserWithToken } from "src/app/model/user-with-token.model";
import { DataService } from "src/app/service/data.service";
import { AuthService } from "src/app/service/auth.service";
import { loginStart } from "../state/auth.action";
import { AuthState } from "../state/auth.state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login;
  msg: any;
  isLoginSuccessful: boolean = false;
  token: String;
  userWithToken: UserWithToken;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onClickSignUp() {
    this.isLoginSuccessful = true;
    this.router.navigate(["../signup"], { relativeTo: this.route });
  }

  onClickLogin() {
    this.isLoginSuccessful = true;
    this.loginData = this.loginForm.value;

    let response = this.store.dispatch(loginStart(this.loginData));
    console.log(response);
    // this.loginService.fetchTokenFromAPI(this.loginData);
    // let response = this.loginService.login(this.loginData);
    // console.log(response);
  }
}
