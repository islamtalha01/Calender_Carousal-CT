import dayjs from 'dayjs';
import { ClosedDate } from "../common/types/calendar.types"


const closedDatesArray: ClosedDate[] = [
  "Monday",                            // String representing day name
  dayjs('2023-01-01'),                 // Dayjs object representing a date
  "Wednesday",                         // String representing day name
  dayjs('2023-01-02')                  // Dayjs object representing a date
];

export default closedDatesArray;

