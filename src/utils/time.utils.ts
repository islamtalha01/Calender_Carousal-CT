import { Dayjs } from "dayjs";
import { UnavailableHrs } from "../common/types/calendar.types";

const getFormattedTime = (time: Dayjs | null, format: string): string => {
  return time?.format(format) || "";
};

const getUnavailableTime = ({ start, end }: UnavailableHrs) => {
  const disabledHours: Array<number> = [];

  for (let i = start; i !== end; i = (i + 1) % 24) {
    disabledHours.push(i);
  }

  disabledHours.push(end);

  return {
    disabledHours: () => disabledHours,
  };
};

export { getFormattedTime, getUnavailableTime };
