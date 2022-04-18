export type ResponseError = {
  code: string;
  message: string;
};

export type ResponseValue = {
  success: boolean;
  data?: any;
  error?: ResponseError;
};

export type Metadata = {
  totalPage: number;
  totalRecord: number;
  currentPage: number;
  limit: number;
};
