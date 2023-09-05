import { CollapseProps, Typography, theme } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { DateType, closedHours } from "../common/types/calendar.types";
import { useState } from "react";
import { useCalendar } from "../hooks";
import { getFormattedTime, getDisabledTime } from "../utils/Time.utils";

import { Dayjs } from "dayjs";
import { FORMATS } from "../common/constants/constanst";
import { formatDuration } from "../utils/Duration.utils";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"

const { Text } = Typography;
const { useToken } = theme;
type CalenderCarouselContainerProps = {
  dates: Array<DateType>;
  setTime: (time: Dayjs | null) => void;
  activePanels?: string | Array<string>;
  CalendarCarousalComponent?: React.ReactNode;
  timeComponent?: React.ReactNode;
  durationComponent?: React.ReactNode;
};

const closedHrs: closedHours = { start: 11, end: 12 };

export default function CalenderCarousalContainer({
  dates,
  setTime,
  CalendarCarousalComponent,
  timeComponent,
  durationComponent,
  activePanels


}:CalenderCarouselContainerProps) {
  const { token } = useToken();
  const { setDate, selected, onclickIncrement, onclickDecrement } =
    useCalendar();
  const [activeKey, setActiveKey] = useState<string | Array<string>>(
    activePanels || ["1", "2"]
  );
  const handleDateSelect = (date: Dayjs) => {
    setDate(date);
    setActiveKey(["2"]);
  };
  const handleTimePick = (time: Dayjs | null) => {
    setTime(time);
    setActiveKey([]);
  };
  const offsetValue: number = 1;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      children: CalendarCarousalComponent ||<CalendarCarousal dates={dates} onClick={handleDateSelect} />,
      extra: <div>{selected.date?.format("DD/MM/YYYY")}</div>,
    },
    {
      key: "2",
      label: "Time",

      children:  timeComponent ||(
        <TimeComponent
          onclick={handleTimePick}
          compute={() => getDisabledTime(closedHrs)}
        />
      ),
      extra: (
        <Text style={{ fontSize: token.fontSizeLG }}>
          {getFormattedTime(selected?.time, FORMATS.time)}
        </Text>
      ),
    },
    {
      key: "3",
      label: "Duration",
      children: null,
      extra: durationComponent ||(
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
