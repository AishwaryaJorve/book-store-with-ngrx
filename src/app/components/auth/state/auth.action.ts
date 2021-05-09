import { createAction, props } from "@ngrx/store";
import { Login } from "src/app/model/login.model";
import { SignUp } from "src/app/model/signup.model";
import { User } from "src/app/model/user.model";

export const LOGIN_START = "[auth-page] login start";
export const LOGIN_SUCCESS = "[auth-page] login success";

export const lOGIN_FAIL = "[auth-page] login fail";

export const SIGNUP_START = "[auth page] signup start";
export const SIGNUP_SUCCESS = "[auth page] signup success";

export const AUTO_lOGIN_ACTION = "[auth page] auto login";
export const LOGOUT_ACTION = "[auth page] logout";

export const loginStart = createAction(LOGIN_START, props<Login>());
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const signupStart = createAction(SIGNUP_START, props<SignUp>());

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
);

export const autoLogin = createAction(AUTO_lOGIN_ACTION);
export const autoLogout = createAction(LOGOUT_ACTION);
// export const loginFail = createAction(lOGIN_FAIL, props<Login>());
