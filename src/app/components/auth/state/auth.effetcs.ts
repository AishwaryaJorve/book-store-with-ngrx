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
    private store: Store<any>,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * login effect
   */
  login$ = createEffect((): any => {
    console.log("login$");

    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        //call to login function of authservice
        return (
          this.authService
            .login(action.userName, action.password)
            //data coming from authservice
            .pipe(
              map((data) => {
                //if login successful set error message as empty string
                this.store.dispatch(setErrorMessage({ message: "" }));
                /**
                 * After lgin we will get token and user we want user only so call to
                 * formatUser of authservice
                 */
                const user = this.authService.formatUser(data);
                // After get user call to setUserLocalStorage
                this.authService.setUserInLocalStorage(user);
                //At last return loginSuccess action
                return loginSuccess({
                  user,
                  redirect: true,
                });
              }),
              catchError((errResp): any => {
                /**
                 * call to getErrorMessage method of authService will status code wise get
                 * error message
                 * */
                this.errorMessage = this.authService.getErrorMessage(errResp.status);
                //set that message in state
                return of(
                  setErrorMessage({
                    message: this.errorMessage,
                  })
                );
              })
            )
        );
      })
    );
  });
  loginRedirect$ = createEffect(
    () => {
      console.log("loginRedirect$");

      return this.actions$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: "" }));
          if (action.redirect) {
            this.router.navigate(["../../book/showbooks"]);
          }
        })
      );
    },
    { dispatch: false }
  );

  signUp$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService
          .signUp(action.firstName, action.lastName, action.userName, action.password, action.books)
          .pipe(
            map((data) => {
              const user = this.authService.formatUser(data);
              return signupSuccess({
                user,
                redirect: true,
              });
            }),
            catchError((errResp): any => {
              // console.log(errResp);
              this.errorMessage = this.authService.getErrorMessage(errResp.status);
              return of(
                setErrorMessage({
                  message: this.errorMessage,
                })
              );
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
        return of(loginSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    (): any => {
      return this.actions$.pipe(
        ofType(autoLogout),
        map((action) => {
          this.authService.logOut();
          this.router.navigate(["../dashboard"]);
        })
      );
    },
    { dispatch: false }
  );

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
