export type Class = {
  name: string;
  duration: number | string;
  value: number | string;
  parcel: number | string;
  description: string;
}   

export const classInitialState = {
  name: '',
  duration: 6,
  value: 1,
  parcel: 1,
  description: '',
}

