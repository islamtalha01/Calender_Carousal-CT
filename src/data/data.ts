import dayjs from 'dayjs';
import { ClosedDate } from "../common/types/calendar.types"
const closedDatesArray: ClosedDate[] = [
  "Monday",                            // String representing day name
  "Tuesday",                           // String representing day name
  dayjs('2023-01-01'),                 // Dayjs object representing a date
  dayjs('2023-01-02'),                 // Dayjs object representing a date
  "Wednesday",                         // String representing day name
  dayjs('2023-01-03'),                 // Dayjs object representing a date
  "Thursday",                          // String representing day name
  dayjs('2023-01-04'),                 // Dayjs object representing a date
  "Friday",                            // String representing day name
  dayjs('2023-01-05')                  // Dayjs object representing a date
];

export default closedDatesArray;