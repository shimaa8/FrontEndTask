export interface IFeatureDetail {
  id: number;
  request: string;
}

export interface IAddressDetail {
  street: string;
  city: string;
}

export interface IContactUs {
  title: string;
  address_one: IAddressDetail[];
  address_two: IAddressDetail[];
  working_hours: string;
}

export interface IContactUsData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone_number: number;
}

export interface IContactUsFeaturesData {
  name: string;
  email: string;
  feature: string;
  message: string;
  phone_number: number;

}
