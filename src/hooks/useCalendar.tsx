import { useState, useContext, createContext, ReactNode } from "react";
import { getAvgDuration } from "../utils/duration.utils";
import { ConfigProvider } from "antd";
import {
  selectedSlot,
  Formats,
  unavailableDate,
  unavailableHrs,
  CardBreakpoint,
  DateType,
  DateRange,
} from "../common/types/calendar.types";
import { Dayjs } from "dayjs";
import {
  MAX_DURATION,
  MIN_DURATION,
  INTERVAL_STEP,
  FORMATS,
  UNAVAILABLE_DATES,
  UNAVAILABLE_HOURS,
  CARD_BREAKPOINT,
  DATERANGE,
} from "../common/constants/constanst";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { createThemeAlgorithm } from "../utils/theme.utils";
import { getDatesList } from "../utils";

type CalendarContext = {
  DateList:Array<DateType>
  setDate: (date: Dayjs) => void,
  setTime: (time: Dayjs | null) => void,
  onclickIncrement: (value: number) => void,
  onclickDecrement: (value: number) => void,
  selected: selectedSlot,
  setDuration: (value: number) => void,
  intervalSize?: number,
  formats?: Formats,
  minDuration?: number,
  maxDuration?: number,
  unavailableDates?: Array<unavailableDate>,
  unavailableHours: unavailableHrs,
  cardCount: number,
  styles?: Partial<CustomStyles>,
};
type CalendarProviderprop = {
  children: ReactNode,
  intervalSize?: number,
  formats?: Formats,
  minDuration?: number,
  maxDuration?: number,
  cards?: CardBreakpoint,
  unavailableDates?: Array<unavailableDate>,
  unavailableHours?: unavailableHrs,
  theme?: CalendarTheme,
  datesRange?:DateRange
};

const CalendarContext = createContext<CalendarContext | undefined>(undefined);

export function CalendarProvider({
  children,
  datesRange,
  intervalSize,
  formats,
  minDuration,
  maxDuration,
  unavailableDates,
  unavailableHours,
  cards,
  theme,
}: CalendarProviderprop) {
  const [selected, setSelectedSlot] = useState<selectedSlot>({
    date: null,
    time: null,
    duration: getAvgDuration(30, 60),
  });
  const breakpoint = useBreakpoint();
  const setDate = (date: Dayjs) => {
    setSelectedSlot({ ...selected, date });
    console.log(selected);
  };
  const setTime = (time: Dayjs | null) => {
    setSelectedSlot({ ...selected, time });
  };
  const setDuration = (duration: number) => {
    setSelectedSlot({ ...selected, duration });
  };

  const onclickIncrement = (offsetValue: number): void => {
  
    const durationslot = selected.duration + offsetValue;
    const threshold = MAX_DURATION;
    if (durationslot <= threshold) {
      setDuration(durationslot);
    } else {
      setDuration(selected.duration);
    }
  };
  const onclickDecrement = (offsetValue: number): void => {
    const durationslot = selected.duration - offsetValue;
    const threshold = MIN_DURATION;
    if (durationslot >= threshold) {
      setDuration(durationslot);
     
    } else {
      setDuration(selected.duration);
    }
  };
  let cardCount = 3;

  cardCount = breakpoint.xxl
    ? cards?.xxl || CARD_BREAKPOINT.xxl
    : breakpoint.xl
    ? cards?.xl || CARD_BREAKPOINT.xl
    : breakpoint.lg
    ? cards?.lg || CARD_BREAKPOINT.lg
    : breakpoint.md
    ? cards?.md || CARD_BREAKPOINT.md
    : breakpoint.sm
    ? cards?.sm || CARD_BREAKPOINT.sm
    : cards?.xs || CARD_BREAKPOINT.xs;

   console.log(datesRange)
  const ContextValues: CalendarContext = {
    
    DateList:datesRange?getDatesList(datesRange,unavailableDates):getDatesList(DATERANGE,UNAVAILABLE_DATES),
    setDate,
    setTime,
    selected,
    setDuration,
    onclickIncrement,
    onclickDecrement,
    intervalSize: intervalSize || INTERVAL_STEP,
    formats: formats || FORMATS,
    minDuration: minDuration || MIN_DURATION,
    maxDuration: maxDuration || MAX_DURATION,
    unavailableDates: unavailableDates || UNAVAILABLE_DATES,
    unavailableHours: unavailableHours || UNAVAILABLE_HOURS,
    cardCount: cardCount,
    styles: theme?.custom,
  };

  return (
    <ConfigProvider theme={{ algorithm: createThemeAlgorithm(theme) }}>
      <CalendarContext.Provider value={ContextValues}>
        {children}
      </CalendarContext.Provider>
    </ConfigProvider>
  );
}
const useCalendar = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error(
      "Calendarprovider must wrap the component in which useCalendar is used"
    );
  }
  return context;
};

export default useCalendar;
