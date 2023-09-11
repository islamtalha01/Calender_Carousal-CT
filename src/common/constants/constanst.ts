import dayjs from "dayjs"
import { unavailableDate, Formats, unavailableHrs,CardBreakpoint, DateRange, } from "../types"
import { CalendarTheme } from "../types"

export const DATE_FORMAT: string = "DD MMMM YYYY"


export const TIME_FORMAT: string = "hh:mm a"


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
// export const DATERANGE:DateRange={
// start:,
// end:
// } //Default Dates are of one week
export const MIN_DURATION:number= 30
export const MAX_DURATION:number= 180
export const INTERVAL_STEP=5
export const UNAVAILABLE_DATES:unavailableDate[]=[
                             
  "Sunday",                      // String representing day name
                // Dayjs object representing a date
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


export const CALENDAR_THEME: CalendarTheme = {
  isDark: true,
  general: undefined,
  custom: {
    buttonBorderRadius: 20,colorCardHeaderText: "red"
  },
}
