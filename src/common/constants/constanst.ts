import { ClosedDate, Formats, closedHours,CardBreakpoint } from "../types/calendar.types"
import dayjs from "dayjs"
/**
 * @constant
 * The default date format used for formatting dates.
 * @default
 */
export const DATE_FORMAT: string = "DD MMMM YYYY"

/**
 * @constant
 * The default time format used for formatting times.
 * @default
 */
export const TIME_FORMAT: string = "hh:mm a"

/**
 * @constant
 * The default clock format (12-hour or 24-hour).
 * @default
 */
export const CLOCK_FORMAT: "12h" | "24h" = "12h"

/**
 * @constant
 * The default date, time and clock formats.
 * @default
 */
export const FORMATS: Formats = {
  date: DATE_FORMAT,
  time: TIME_FORMAT,
  clock: CLOCK_FORMAT,
}

export const MIN_Duration:number= 30
export const MAX_Duration:number= 180
export const INTERVAL_STEP=1
export const ClosedDates:ClosedDate[]=[
  "Monday",                            // String representing day name
  dayjs('2023-01-01'),                 // Dayjs object representing a date
  "Wednesday",                         // String representing day name
  dayjs('2023-01-02')                  // Dayjs object representing a date
];
export const closedHrs:closedHours = { start: 2, end: 4 };
export const CARD_BREAKPOINT: CardBreakpoint = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
  xxl: 10,
}
