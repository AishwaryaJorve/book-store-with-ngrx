import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { DataService } from "src/app/service/data.service";
import { AppState } from "src/app/store/app.state";
import { autoLogout } from "../../auth/state/auth.action";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  navBarData: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  onClickHome() {
    this.store.dispatch(autoLogout());
  }

  onClickAddBook() {
    this.router.navigate(["../../book/addbook"], {
      relativeTo: this.route,
    });
  }

  onClickShowAllBook() {
    this.router.navigate(["../../book/showbooks"], {
      relativeTo: this.route,
    });
  }

  logout(event: Event) {
    this.store.dispatch(autoLogout());
  }
}
