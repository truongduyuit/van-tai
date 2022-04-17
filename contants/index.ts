export type ResponseError = {
  code: string;
  message: string;
};

export type ResponseValue = {
  success: boolean;
  data?: any;
  error?: ResponseError;
};
