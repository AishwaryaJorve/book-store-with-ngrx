import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { autoLogout } from "../auth/state/auth.action";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  onClickLogin() {
    this.router.navigate(["../showbooks"], {
      relativeTo: this.route,
    });
  }

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
