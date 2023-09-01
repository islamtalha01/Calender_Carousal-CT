import { useState, useContext, createContext, ReactNode } from "react";
import { getDatesList } from "../utils/Date.utils";
import { formatDuration, getavgDuration } from "../utils/Duration.utils";
import { ConfigProvider } from "antd";
import { DateType, selectedSlot,Formats,ClosedDate,closedHours } from "../common/types/calendar.types";
import { Dayjs } from "dayjs";
import { MAX_Duration,MIN_Duration } from "../common/constants/constanst";
import closedDatesArray from "../data/data";

type CalendarContext = {
  dates: Array<DateType>;
  setDate: (date: Dayjs) => void;
  setTime: (time: Dayjs | null) => void;
  onclickIncrement:(value:number)=>void
  onclickDecrement:(value:number)=>void
  selected: selectedSlot;
  setDuration: (value: number) => void;
  intervalSize?: number
  formats?: Formats
  minDuration?: number
  maxDuration?: number
  // cards?: CardBreakpoint
  unavailableDates?: Array<ClosedDate>
  unavailableHours?: closedHours

};
type CalendarProviderprop = {
  children: ReactNode;
  datesList?: Array<DateType>
  intervalSize?: number
  formats?: Formats
  minDuration?: number
  maxDuration?: number
  // cards?: CardBreakpoint
  unavailableDates?: Array<ClosedDate>
  unavailableHours?: closedHours
};

const CalendarContext = createContext<CalendarContext | undefined>(undefined);

export function CalendarProvider({ children,datesList,intervalSize,formats,minDuration,maxDuration,unavailableDates,unavailableHours}: CalendarProviderprop) {
  const [selected, setSelectedSlot] = useState<selectedSlot>({
    date: null,
    time: null,
    duration: getavgDuration(30, 60),
  });
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
  const ContextValues: CalendarContext = {
    setDate,
    setTime,
    dates: getDatesList(10, closedDatesArray) ||datesList,
    selected,
    setDuration,
    onclickIncrement:onclickIncrement,
    onclickDecrement:onclickDecrement,
  //   intervalSize?: ,
  //   formats?: ,
  //   minDuration?: ,
  //   maxDuration?: ,
  // // cards?: CardBreakpoint
  //   unavailableDates?:
  //   unavailableHours?: 
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
