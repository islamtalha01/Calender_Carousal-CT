import  { Dayjs } from "dayjs";

export type DateType = {
  date: Dayjs;
  unavailable?: boolean;
};

export type UnavailableDate = string | Dayjs;
export type DateRange = {
  start: Dayjs;
  end: Dayjs;
} 
export type selectedSlot = {
  date: Dayjs | null;

  time: Dayjs | null;

  duration: number;
};
export type Formats = {
  date: string;

  time: string;

  clock: "12h" | "24h";
};

export type UnavailableHrs = {
  start: number;
  end: number;
};



export type CardBreakPoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
