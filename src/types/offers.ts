type BankType = {
  bid: string;
  name: string;
  site: string;
  description: string;
  permalink: string;
  logo: string;
  insuranceName: string;
  insuranceDescription: string;
  countryCode: string;
};

export type Offers = {
  [x: string]: unknown;
  oid: string;
  isOvernight: boolean;
  minDeposit: number;
  maxDeposit: number;
  duration: number;
  isForeignCurrency: boolean;
  interestRate: number;
  currency: string;
  bid: string;
  bank: BankType;
};
