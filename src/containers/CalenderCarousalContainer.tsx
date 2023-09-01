import { CollapseProps, Typography, theme } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { DateType,closedHours } from "../common/types/calendar.types";
import { useState } from "react";
import { useCalendar } from "../hooks";
import { getFormattedTime,getDisabledTime } from "../utils/Time.utils";
import { Dayjs } from "dayjs";
import {
  FORMATS,
  MAX_Duration,
  MIN_Duration,
} from "../common/constants/constanst";
import { formatDuration } from "../utils/Duration.utils";
const { Text } = Typography;
const { useToken } = theme;
type CalenderCarouselProps = {
  dates: Array<DateType>;
  setTime: (time: Dayjs | null) => void;
};
// const min:number=5;const max:number=9
const closedHrs:closedHours={start:5,end:6}


export default function CalenderCarousalContainer({
  dates,
  setTime,
}: CalenderCarouselProps) {
  const { token } = useToken();
  const { setDate, selected, setDuration } = useCalendar();
  const [activeKey, setActiveKey] = useState<string | Array<string>>(["1"]);
  const handleDateSelect = (date: Dayjs) => {
    setDate(date);
    setActiveKey(["2"]);
  };
  const handleTimePick = (time: Dayjs | null) => {
    setTime(time);
    setActiveKey([]);
  };
  const offsetValue: number = 1;
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
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      children: <CalendarCarousal dates={dates} onClick={handleDateSelect} />,
      extra: <div>{selected.date?.format("DD/MM/YYYY")}</div>,
    },
    {
      
      key: "2",
      label: "Time",
      
      children: <TimeComponent onclick={handleTimePick} />,
      extra: (
        <Text style={{ fontSize: token.fontSizeLG }}>
          {getFormattedTime(selected?.time, FORMATS.time)}
        </Text>
      ),
    },
    {
      key: "3",
      label: "Duration",
      children:null,
      extra: (
        <DurationComponent
          value={formatDuration(selected.duration)}
          onclickIncrement={() => onclickIncrement(offsetValue)}
          onClickDecrement={() => onclickDecrement(offsetValue)}
        />
      ),
    },
  ];
  return (
    <Collapse
      ghost
      activeKey={activeKey}
      items={items}
      expandIconPosition="end"
    />
  );
}
