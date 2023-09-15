import dayjs from "dayjs"
import { unavailableDate, Formats, unavailableHrs,CardBreakpoint, DateRange, } from "../types"
import { CalendarTheme } from "../types"
import { Dayjs } from "dayjs"

type duration=
{
  span:number,
  unit:string,
}
export const DATE_FORMAT: string = "DD MMMM YYYY"


export const TIME_FORMAT: string = "hh:mm A"


export const CLOCK_FORMAT: "12h" | "24h" = "12h"

export const DATERANGE:DateRange=
{
  start:dayjs(),
  end:dayjs().add(7, 'day')
}
export const FORMATS: Formats = {
  date: DATE_FORMAT,
  time: TIME_FORMAT,
  clock: CLOCK_FORMAT,
}

export const MIN_DURATION:duration={ 
  span:30,
  unit:"Mins"
}
export const MAX_DURATION:duration={ 
  span:180,
  unit:"Mins"
}
export const INTERVAL_STEP:duration=
{
  span:15,
  unit:"Mins"
}
export const UNAVAILABLE_DATES:unavailableDate[]=[
                             
  "Sunday",                     
                
];
export const UNAVAILABLE_HOURS:unavailableHrs = { start: 12, end: 14 };
export const CARD_BREAKPOINT: CardBreakpoint = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 5,
  xl: 7,
  xxl: 9,
}

export type unavailableDatesCallback = (day: Dayjs) => boolean |undefined;
export const CALENDAR_THEME: CalendarTheme = {
  isDark: false,
  general: undefined,
  custom: {
    buttonBorderRadius: 20,colorCardHeaderText: "red"
  },
}
