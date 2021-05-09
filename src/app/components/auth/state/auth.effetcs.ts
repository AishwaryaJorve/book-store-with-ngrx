import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { Login } from "src/app/model/login.model";
import { SignUp } from "src/app/model/signup.model";
import { AuthService } from "src/app/service/auth.service";
import { setErrorMessage } from "src/app/store/shared/shared.action";
import {
  autoLogin,
  autoLogout,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
} from "./auth.action";
@Injectable()
export class AuthEffects {
  errorMessage: string = "";
  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.userName, action.password).pipe(
          map((data) => {
            this.store.dispatch(setErrorMessage({ message: "" }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            // return loginSuccess({ user, redirect: true });
          }),
          catchError((errResp): any => {
            // console.log(errResp);
            this.errorMessage = this.authService.getErrorMessage(
              errResp.status
            );
            return of(setErrorMessage({ message: this.errorMessage }));
          })
        );
      })
    );
  });
  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: "" }));
          this.router.navigate(["/"], {
            relativeTo: this.route,
          });
          // if (action.redirect) {
          //   this.router.navigate(["/"], {
          //     relativeTo: this.route,
          //   });
          // }
        })
      );
    },
    { dispatch: false }
  );

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService
          .signUp(
            action.firstName,
            action.lastName,
            action.userName,
            action.password,
            action.books
          )
          .pipe(
            map((data) => {
              const user = this.authService.formatUser(data);
              return signupSuccess({ user });
            }),
            catchError((errResp): any => {
              // console.log(errResp);
              this.errorMessage = this.authService.getErrorMessage(
                errResp.status
              );
              return of(setErrorMessage({ message: this.errorMessage }));
            })
          );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        console.log(user);
        return of(loginSuccess({ user }));
      })
    );
  });

  logout$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(autoLogout),
      map((action) => {
        this.authService.logOut();
        this.router.navigate(["dashboard"]);
      })
    );
  });

  // signUpRedirect$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(loginSuccess),
  //       tap((action) => {
  //         this.store.dispatch(setErrorMessage({ message: "" }));
  //         this.router.navigate(["/addbook"], { relativeTo: this.route });
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );
}
