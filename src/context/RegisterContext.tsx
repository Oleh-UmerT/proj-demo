import React, { Dispatch, SetStateAction, useState } from "react";

type FormType = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  dob: string;
  profession: string;
  gender: string;
  social_status: string;
  academic_position: string;
  phone: string;
  street: string;
  house: string;
  zip: string;
  city: string;
  country: string;
  birth_country: string;
  birth_city: string;
  nationality: string;
  nationality_2: string;
  us_citizen: boolean;
  pay_tax_country: string;
  ssn: string;
};

export type ContextDealState = {
  formState: FormType;
  setFormState: Dispatch<SetStateAction<FormType>>;
};

const initialState: ContextDealState = {
  formState: {} as FormType,
  setFormState: () => {},
};

type Provider<Elements = void> = React.FC<{
  children: React.ReactNode;
  extraData?: {
    elements: Elements;
  };
}>;

export const CreateDealContext = React.createContext(initialState);

export const CreateDealProvider: Provider = ({ children }) => {
  const [formState, setFormState] = useState<FormType>({} as FormType);
  return (
    <CreateDealContext.Provider value={{ formState, setFormState }}>
      {children}
    </CreateDealContext.Provider>
  );
};
