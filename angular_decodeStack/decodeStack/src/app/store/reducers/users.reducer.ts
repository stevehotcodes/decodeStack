import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.actions';

export interface UserState {
  logInUserSuccess: string;
  logInUserFailure: string;
  registerUserSuccess: string;
  registerUserFailure: string;
}

export const initialState: UserState = {
  logInUserSuccess: "",
  logInUserFailure: "",
  registerUserSuccess: "",
  registerUserFailure: ""
};

export const userReducer = createReducer(
  initialState,
  on(userActions.logInUserSuccess, (state, { message }) => ({
    ...state,
    logInUserSuccess: message
  })),

  on(userActions.logInUserFailure, (state, { error }) => ({
    ...state,
    logInUserSuccess: '',
    logInUserFailure:error
  })),
  
);



