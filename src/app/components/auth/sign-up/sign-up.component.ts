import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Books } from "src/app/model/books.model";
import { SignUp } from "src/app/model/signup.model";
import { User } from "src/app/model/user.model";
import { SignupService } from "src/app/service/signup.service";
import { AppState } from "src/app/store/app.state";
import { signupStart } from "../state/auth.action";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  signForm: FormGroup;
  signUPFormData: User;
  constructor(
    private fb: FormBuilder,
    private SignupService: SignupService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.signForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  /**
   * on click signup
   */
  onClickSignUp() {
    this.signUPFormData = this.signForm.value;
    let books: Books[] = [];

    let signUpData: SignUp = new SignUp(
      this.signUPFormData.firstName,
      this.signUPFormData.lastName,
      this.signUPFormData.userName,
      this.signUPFormData.password,
      books
    );

    this.store.dispatch(signupStart(signUpData));
  }
}
