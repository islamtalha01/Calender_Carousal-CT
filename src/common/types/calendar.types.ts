import { Dayjs } from "dayjs";

export type DateType = {
  date: Dayjs;
  closed?: boolean;
};

export type unavailableDate = string | Dayjs;

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

export type unavailableHrs = {
  start: number;
  end: number;
};

export type DurationRange = {
  min: number;
  max: number;
};

export type CardBreakpoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
