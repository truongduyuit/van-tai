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

export const MetadataDefault: Metadata = {
  currentPage: 0,
  totalPage: 0,
  limit: 10,
  totalRecord: 0,
};

export const LIMIT_RECORDS = 10;
