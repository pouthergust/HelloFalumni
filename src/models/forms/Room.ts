import { Class } from "./Class"
import { Period } from "./Period"

export type Room = {
  name: string;
  class?: Class | string;
  classStart: Date | string;
  classEnd: Date | string;
  day: string;
  period: Period | string;
}   

export const roomInitialState = {
  name: '',
  class: '',
  classStart: `${new Date().getTime()}`,
  classEnd: `${new Date().getTime()}`,
  day: '',
  period: '',
}

