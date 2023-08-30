import { Formats } from "../types/calendar.types"

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