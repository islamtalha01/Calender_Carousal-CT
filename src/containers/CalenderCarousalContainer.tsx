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
import { DownOutlined } from '@ant-design/icons'
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
    handleIncrementClick,
    handleDecrementClick,
    styles,
    setTime,
    unavailableHours,
    dateList,intervalStep

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
      label: <Text style={{ fontSize: token.fontSizeLG,margin:token.marginLG }}>Date</Text>,
      children: CalendarCarousalComponent || (
        <ConfigProvider
          theme={{
            token: createDateToken( token,styles),
          }}
        >
          <CalendarCarousal dates={dateList} onClick={handleDateSelect} />
        </ConfigProvider>
      ),

      extra: <Text style={{ fontSize: token.fontSizeLG }}>{selected.date?.format("DD/MM/YYYY")}</Text>,
    },
    {
      key: "2",
      label: <Text style={{ fontSize: token.fontSizeLG,margin:token.marginLG }} >Time</Text>,

      children: timeComponent || (
        <ConfigProvider theme={{token:createTimeToken(token,styles)}}> 
          <TimeComponent               
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
      label: <Text style={{ fontSize: token.fontSizeLG ,margin:token.marginLG}}>Duration</Text>,
      children: null,
      showArrow: false,
      extra: durationComponent || (
        <ConfigProvider theme={{token:createDurationToken(token,styles)}}>
          <DurationComponent                
            value={formattedDuration(selected.duration)}
            handleIncrementClick={() =>  handleIncrementClick(intervalStep)}
            handleDecrementClick={() =>  handleDecrementClick(intervalStep)}
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
      expandIcon={() => <DownOutlined  />}
      expandIconPosition="end"
      style={{ backgroundColor: token.colorBgLayout }}
    />
  );
}


