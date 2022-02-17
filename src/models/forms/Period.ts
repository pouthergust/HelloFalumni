export type Period = {
  name: string;
  classScheduleStart: Date;
  classScheduleEnd: Date;
  maxStudent: number;
}   

export const periodInitialState = {
  name: '',
  classScheduleStart: new Date(),
  classScheduleEnd: new Date(),
  maxStudent: 6
}

