import { useState, useContext, createContext, ReactNode } from "react";
import { getavgDuration } from "../utils/Duration.utils";
import { ConfigProvider } from "antd";
import {
  selectedSlot,
  Formats,
  unavailableDate,
  unavailableHrs,
  CardBreakpoint,
} from "../common/types/calendar.types";
import { Dayjs } from "dayjs";
import {
  MAX_Duration,
  MIN_Duration,
  INTERVAL_STEP,
  FORMATS,
  UNAVAILABLE_DATES,
  UNAVAILABLE_HOURS,
  CARD_BREAKPOINT,
} from "../common/constants/constanst";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { createThemeAlgorithm } from "../utils/theme.utils";

type CalendarContext = {
  setDate: (date: Dayjs) => void;
  setTime: (time: Dayjs | null) => void;
  onclickIncrement: (value: number) => void;
  onclickDecrement: (value: number) => void;
  selected: selectedSlot;
  setDuration: (value: number) => void;
  intervalSize?: number;
  formats?: Formats;
  minDuration?: number;
  maxDuration?: number;
  unavailableDates?: Array<unavailableDate>;
  unavailableHours: unavailableHrs;
  cardCount: number;
  styles?: Partial<CustomStyles>;
};
type CalendarProviderprop = {
  children: ReactNode;
  intervalSize?: number;
  formats?: Formats;
  minDuration?: number;
  maxDuration?: number;
  cards?: CardBreakpoint;
  unavailableDates?: Array<unavailableDate>;
  unavailableHours?: unavailableHrs;
  theme?: CalendarTheme;
};

const CalendarContext = createContext<CalendarContext | undefined>(undefined);

export function CalendarProvider({
  children,

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
    duration: getavgDuration(30, 60),
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
    console.log("hi");
    const durationslot = selected.duration + offsetValue;
    const threshold = MAX_Duration;
    if (durationslot <= threshold) {
      setDuration(durationslot);
    } else {
      setDuration(selected.duration);
    }
  };
  const onclickDecrement = (offsetValue: number): void => {
    const durationslot = selected.duration - offsetValue;
    const threshold = MIN_Duration;
    if (durationslot >= threshold) {
      setDuration(durationslot);
      console.log("decrement");
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


  const ContextValues: CalendarContext = {
    setDate,
    setTime,
    selected,
    setDuration,
    onclickIncrement: onclickIncrement,
    onclickDecrement: onclickDecrement,
    intervalSize: intervalSize || INTERVAL_STEP,
    formats: formats || FORMATS,
    minDuration: minDuration || MIN_Duration,
    maxDuration: maxDuration || MAX_Duration,
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
