import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { autoLogin } from "./components/auth/state/auth.action";
import { AppState } from "./store/app.state";
import { getErrorMessage } from "./store/shared/shared.selectors";
import { SharedState } from "./store/shared/shared.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "LoginApplication";
  errorMessage: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());
  }

  onLoginClick(data) {}
}
