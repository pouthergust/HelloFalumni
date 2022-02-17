export type Student = {
  name: string;
  rg: string;
  cpf: string;
  phone: string;
  email: string;
  cep: string;
  street: string;
  city: string;
  uf: string;
  room: string;
  day: string;
  class: string;
  dateStart: string;
  dateEnd: string;
  paymentMethod: string;
  dueDate: string;
  parcel: number | string;
  parcelValue: number | string;
}   

export const studentInitialState = {
  name: '',
  rg: '',
  cpf: '',
  phone: '',
  email: '',
  cep: '',
  street: '',
  city: '',
  uf: '',
  room: '',
  day: '',
  class: '',
  dateStart: `${new Date().getDay()}`,
  dateEnd: `${new Date().getDay()}`,
  paymentMethod: '',
  dueDate: `${new Date().getDay()}`,
  parcel: '1',
  parcelValue: '1'
}

