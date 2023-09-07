import { unavailableDate, Formats, unavailableHrs,CardBreakpoint } from "../types/calendar.types"
import dayjs from "dayjs"

export const DATE_FORMAT: string = "DD MMMM YYYY"


export const TIME_FORMAT: string = "hh:mm a"


export const CLOCK_FORMAT: "12h" | "24h" = "12h"


export const FORMATS: Formats = {
  date: DATE_FORMAT,
  time: TIME_FORMAT,
  clock: CLOCK_FORMAT,
}

export const MIN_Duration:number= 30
export const MAX_Duration:number= 180
export const INTERVAL_STEP=1
export const UNAVAILABLE_DATES:unavailableDate[]=[
  "Monday",                           
  "Wednesday",                         // String representing day name
  dayjs('2023-09-06')                  // Dayjs object representing a date
];
export const UNAVAILABLE_HOURS:unavailableHrs = { start: 2, end: 4 };
export const CARD_BREAKPOINT: CardBreakpoint = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
  xxl: 10,
}
