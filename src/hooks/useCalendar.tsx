import { useState, useContext, createContext, ReactNode } from "react";
import { getDatesList } from "../utils/Date.utils";
import { formatDuration, getavgDuration } from "../utils/Duration.utils";
import { ConfigProvider } from "antd";
import {
  DateType,
  selectedSlot,
  Formats,
  ClosedDate,
  closedHours,
  CardBreakpoint,
} from "../common/types/calendar.types";
import { Dayjs } from "dayjs";
import {
  MAX_Duration,
  MIN_Duration,
  INTERVAL_STEP,
  FORMATS,
  ClosedDates,
  closedHrs,
  CARD_BREAKPOINT,
} from "../common/constants/constanst";
import closedDatesArray from "../data/data";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { AliasToken } from "antd/es/theme/internal";
type CalendarContext = {
  dates: Array<DateType>  | undefined;
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
  cards?: CardBreakpoint;
  unavailableDates?: Array<ClosedDate>;
  unavailableHours?: closedHours;
  cardCount: number;
  styles?: Partial<CustomStyles>;
};
type CalendarProviderprop = {
  children: ReactNode;
  datesList?: Array<DateType>;
  intervalSize?: number;
  formats?: Formats;
  minDuration?: number;
  maxDuration?: number;
  cards?: CardBreakpoint;
  unavailableDates?: Array<ClosedDate>;
  unavailableHours?: closedHours;

  theme?: CalendarTheme
};

const CalendarContext = createContext<CalendarContext | undefined>(undefined);

export function CalendarProvider({
  children,
  datesList,
  intervalSize,
  formats,
  minDuration,
  maxDuration,
  unavailableDates,
  unavailableHours,
  cards,
  theme
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

  /* istanbul ignore next -- @preserve */
  if (breakpoint.xxl) cardCount = CARD_BREAKPOINT.xxl;
  else if (breakpoint.xl) cardCount = CARD_BREAKPOINT.xl;
  else if (breakpoint.lg) cardCount = CARD_BREAKPOINT.lg;
  else if (breakpoint.md) cardCount = CARD_BREAKPOINT.md;
  else if (breakpoint.sm) cardCount = CARD_BREAKPOINT.sm;
  else if (breakpoint.xs) cardCount = CARD_BREAKPOINT.xs;
  const ContextValues: CalendarContext = {
    setDate,
    setTime,
    dates: datesList,
    selected,
    setDuration,
    onclickIncrement: onclickIncrement,
    onclickDecrement: onclickDecrement,
    intervalSize: intervalSize || INTERVAL_STEP,
    formats: formats || FORMATS,
    minDuration: minDuration || MIN_Duration,
    maxDuration: maxDuration || MAX_Duration,
    cards: CARD_BREAKPOINT,
    unavailableDates: closedDatesArray || ClosedDates,
    unavailableHours: unavailableHours || closedHrs,
    cardCount: cardCount,
    styles: theme?.custom 
    // intervalSize?:
  };

  return (
    <ConfigProvider>
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
