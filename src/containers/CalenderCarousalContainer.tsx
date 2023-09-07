import { CollapseProps, ConfigProvider, Typography, theme } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { unavailableHrs } from "../common/types/calendar.types";
import { useState } from "react";
import { useCalendar } from "../hooks";
import { getFormattedTime, getDisabledTime } from "../utils/Time.utils";
import { getDatesList } from "../utils/Date.utils.ts";
import { Dayjs } from "dayjs";
import { FORMATS } from "../common/constants/constanst";
import { formatDuration } from "../utils/Duration.utils";
import { createDateToken,createDurationToken,createTimeToken } from "../utils/theme.utils.ts";
const { Text } = Typography;
const { useToken } = theme;
type CalenderCarouselContainerProps = {
  activePanels?: string | Array<string>;
  CalendarCarousalComponent?: React.ReactNode;
  timeComponent?: React.ReactNode;
  durationComponent?: React.ReactNode;
};



export default function CalenderCarousalContainer({
  
  CalendarCarousalComponent,
  timeComponent,
  durationComponent,
  activePanels,
}: CalenderCarouselContainerProps) {
  const { token } = useToken();
  const {
    setDate,
    selected,
    onclickIncrement,
    onclickDecrement,
    styles,
    setTime,
    unavailableDates, 
    unavailableHours,

  } = useCalendar();
  const [activeKey, setActiveKey] = useState<string | Array<string>>(
    activePanels || ["1"]
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
      children: CalendarCarousalComponent || (
        <ConfigProvider
          theme={{
            token: createDateToken( token,styles),
          }}
        >
          <CalendarCarousal dates={getDatesList(7,unavailableDates)} onClick={handleDateSelect} />
        </ConfigProvider>
      ),

      extra: <Text>{selected.date?.format("DD/MM/YYYY")}</Text>,
    },
    {
      key: "2",
      label: "Time",

      children: timeComponent || (
        <ConfigProvider theme={{token:createTimeToken(token,styles)}}> 
          <TimeComponent                    //add the seperate theme style.
            onclick={handleTimePick}
            compute={() => getDisabledTime(unavailableHours)}
          />
        </ConfigProvider>
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
      extra: durationComponent || (
        <ConfigProvider theme={{token:createDurationToken(token,styles)}}>
          <DurationComponent                //add the seperate theme style.
            value={formatDuration(selected.duration)}
            onclickIncrement={() => onclickIncrement(offsetValue)}
            onClickDecrement={() => onclickDecrement(offsetValue)}
          />
        </ConfigProvider>
      ),
    },
  ];
  return (
    <Collapse
      ghost
      activeKey={activeKey}
      items={items}
      expandIconPosition="end"
      style={{ backgroundColor: token.colorBgLayout }}
    />
  );
}


const closedHrs: unavailableHrs = { start: 11, end: 12 };