export interface CompanySignupdto {
  companyname: string;
  email: string;
  password: string;
}
export interface Logindto {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  status: {
    code: number;
    success: boolean;
    message: string;
  };
  data: T;
}

export interface Orderdto {
  address: string;
  city: string;
  postalcode: string;
}
export interface Riderdto {
  fullname: string;
  email: string;
}
