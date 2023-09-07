import { Dayjs } from "dayjs"
import { unavailableHrs } from "../common/types/calendar.types"

   

const getFormattedTime = (time: Dayjs | null, format: string): string => {
  return time?.format(format) || ""
}

/**
 * Convert a closed hours range to an array of hours.
 * @param {ClosedHoursRange} range - The range of disabled hours.
 * @returns {number[]} - An array of disabled hours.
 * @example {start: 1, end: 4} => [1, 2, 3, 4]
 */
const getDisabledTime=({ start, end }: unavailableHrs) => {
    const disabledHours: Array<number> = [];
   
    for (let i = start; i !== end; i = (i + 1) % 24) {
      disabledHours.push(i);
    }
  
    disabledHours.push(end); // Include the 'end' hour
  
    return {
      disabledHours: () => disabledHours,
    };
  };

export { getFormattedTime, getDisabledTime }

