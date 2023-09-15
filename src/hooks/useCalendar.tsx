import { useState, useContext, createContext, ReactNode } from "react";
import { getMeanDuration } from "../utils/duration.utils";
import { ConfigProvider } from "antd";
import {
  selectedSlot,
  Formats,
  UnavailableDate,
  UnavailableHrs,
  CardBreakPoint,
  DateType,
  DateRange,
} from "../common/types/calendar.types";
import dayjs, { Dayjs } from "dayjs";
import {
  MAX_DURATION,
  MIN_DURATION,
  INTERVAL_STEP,
  FORMATS,
  UNAVAILABLE_DATES,
  UNAVAILABLE_HOURS,
  CARD_BREAKPOINT,
  DATERANGE,
  unavailableDatesCallback,
} from "../common/constants/constanst";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { CalendarTheme, CustomStyles } from "../common/types/theme.type";
import { createThemeAlgorithm } from "../utils/theme.utils";
import { getDatesList } from "../utils";
type Duration = {
  span: number;
  unit: string;
};
type CalendarContext = {
  unavailableDates: Array<UnavailableDate> | unavailableDatesCallback;
  unavailableHours: UnavailableHrs;
  cardCount: number;
  styles?: Partial<CustomStyles>;
  setDate: (date: Dayjs) => void;
  setTime: (time: Dayjs | null) => void;
  handleDecrementClick: (value: Duration) => void;
  handleIncrementClick: (value: Duration) => void;
  setDuration: (value: number) => void;
  dateList: Array<DateType>;

  selected: selectedSlot;

  intervalStep: Duration;
  formats: Formats;
};

type CalendarProviderprop = {
  children: ReactNode;
  unavailableDates?: Array<UnavailableDate> | unavailableDatesCallback;
  unavailableHours?: UnavailableHrs;
  theme?: CalendarTheme;
  datesRange?: DateRange;
  intervalStep?: Duration;
  formats?: Formats;
  minDuration?: Duration;
  maxDuration?: Duration;

  cardsBreakPoints?: CardBreakPoint;
};

const CalendarContext = createContext<CalendarContext | undefined>(undefined);

export function CalendarProvider({
  children,
  unavailableDates,
  unavailableHours,
  datesRange,
  intervalStep,
  formats,
  minDuration,
  maxDuration,

  cardsBreakPoints,
  theme,
}: CalendarProviderprop) {
  const [selected, setSelected] = useState<selectedSlot>({
    date: null ,
    time: null,
    duration:
      minDuration && maxDuration
        ? getMeanDuration(minDuration, maxDuration)
        : getMeanDuration(MIN_DURATION, MAX_DURATION), 
  });

  const breakpoint = useBreakpoint();
  const setDate = (date: Dayjs) => {
    setSelected({ ...selected, date });
   
  };
  const setTime = (time: Dayjs | null) => {
    setSelected({ ...selected, time });
  };
  const setDuration = (duration: number) => {
    setSelected({ ...selected, duration });
  };

  const handleIncrementClick = (offsetValue: Duration): void => {
    const newDuration = selected.duration + offsetValue.span;

    let threshold = 0;

    if (maxDuration?.unit) {
      if (maxDuration.unit === "Mins") {
        threshold = maxDuration.span;
      } else if (maxDuration?.unit === "Hrs") {
        threshold = maxDuration.span * 60;
      } else if (maxDuration?.unit === "Days") {
        threshold = maxDuration.span * 24 * 60;
      }
    } else {
      threshold = MAX_DURATION.span;
    }
    setDuration(Math.min(newDuration, threshold));
  };
  const handleDecrementClick = (offsetValue: Duration): void => {
    const newDuration = selected.duration - offsetValue.span;

    let threshold = 0;
    if (minDuration?.unit) {
      if (minDuration.unit === "Mins") {
        threshold = minDuration.span;
      } else if (minDuration?.unit === "Hrs") {
        threshold = minDuration.span * 60;
      } else if (minDuration?.unit === "Days") {
        threshold = minDuration.span * 24 * 60;
      }
    } else {
      threshold = MIN_DURATION.span;
    }
    setDuration(Math.max(newDuration, threshold));
  };

  let cardCount = 1;

  cardCount = breakpoint.xxl
    ? cardsBreakPoints?.xxl || CARD_BREAKPOINT.xxl
    : breakpoint.xl
    ? cardsBreakPoints?.xl || CARD_BREAKPOINT.xl
    : breakpoint.lg
    ? cardsBreakPoints?.lg || CARD_BREAKPOINT.lg
    : breakpoint.md
    ? cardsBreakPoints?.md || CARD_BREAKPOINT.md
    : breakpoint.sm
    ? cardsBreakPoints?.sm || CARD_BREAKPOINT.sm
    : cardsBreakPoints?.xs || CARD_BREAKPOINT.xs;

  const ContextValues: CalendarContext = {
    dateList: datesRange
      ? getDatesList(datesRange, unavailableDates || UNAVAILABLE_DATES)
      : getDatesList(DATERANGE, UNAVAILABLE_DATES),

    selected,
    intervalStep: intervalStep || INTERVAL_STEP,
    formats: formats || FORMATS,

    unavailableDates: unavailableDates || UNAVAILABLE_DATES,
    unavailableHours: unavailableHours || UNAVAILABLE_HOURS,
    cardCount: cardCount,
    styles: theme?.custom,
    setDate,
    setTime,
    setDuration,
    handleIncrementClick,
    handleDecrementClick,
  };

  return (
    <ConfigProvider
      theme={{ algorithm: createThemeAlgorithm(theme), token: theme?.general }}
    >
      <CalendarContext.Provider value={ContextValues}>
        {children}
      </CalendarContext.Provider>
    </ConfigProvider>
  );
}
const useCalendar = () => {
  const calendarContext = useContext(CalendarContext);

  if (!calendarContext) {
    throw new Error(
      "Calendarprovider must wrap the component in which useCalendar is used"
    );
  }
  return calendarContext;
};

export default useCalendar;
