import { ResponseError } from ".";

export const LOGIN_ACCOUNT_NOT_EXIST: ResponseError = {
  code: "LOGIN_ACCOUNT_NOT_EXIST",
  message: "Account not exist",
};

export const LOGIN_ACCOUNT_WRONG: ResponseError = {
  code: "LOGIN_ACCOUNT_WRONG",
  message: "Phone or password is wrong",
};

export const SERVICE_CREATE_FAIL: ResponseError = {
  code: "SERVICE_CREATE_FAIL",
  message: "Create service failed",
};
