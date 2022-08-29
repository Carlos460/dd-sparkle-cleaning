// Appointment type
export interface IAppointment {
  phone: String;
  email: String;
  firstName: String;
  lastName: String;
  address: IAddress;
  date: String;
  time: String;
}

interface IAddress {
  street: String;
  city: String;
  state: String;
  zip: String;
}
