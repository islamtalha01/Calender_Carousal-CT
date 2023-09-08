import { CollapseProps, ConfigProvider, Typography, theme } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { useState } from "react";
import { useCalendar } from "../hooks";
import { getFormattedTime, getUnavailableTime} from "../utils/time.utils.ts";
import { Dayjs } from "dayjs";
import { FORMATS } from "../common/constants/constanst";
import { formattedDuration } from "../utils/duration.utils.ts";
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
    unavailableHours,
    dateList,intervalSize

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
          <CalendarCarousal dates={dateList} onClick={handleDateSelect} />
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
            computeDisabledHours={() => getUnavailableTime(unavailableHours)}
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
            value={formattedDuration(selected.duration)}
            onclickIncrement={() => onclickIncrement(intervalSize)}
            onClickDecrement={() => onclickDecrement(intervalSize)}
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


