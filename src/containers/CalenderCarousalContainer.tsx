import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import { CollapseProps,Typography,theme } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { DateType } from "../common/types/calendar.types";
import { useState } from "react";
import useCalendar from "../hooks";
import { getFormattedTime } from "../utils/Time.utils";
import {Dayjs} from "dayjs";
import { FORMATS } from "../common/constants/constanst";
const{Text}=Typography
const {useToken}=theme
type CalenderCarouselProps = {
  dates: Array<DateType>;
  setTime:(time:Dayjs |null)=>void,
  
};

const text = `hi`;

const genExtra = () => <CurrentDay />;

export default function CalenderCarousalContainer({dates,setTime}:CalenderCarouselProps) {
  const  {token}=useToken() 
  const {setDate,selected}=useCalendar()
  const [activeKey, setActiveKey] = useState<string | Array<string>>(
     ["1", "2"]
  )
  const handleDateSelect=(date:Dayjs)=>
{
  setDate(date);
  setActiveKey(["2"])
  
}
const handleTimePick=(time:Dayjs | null)=>
{
  setTime(time)
  setActiveKey([])
  
}
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      children: <CalendarCarousal dates={dates} onClick={handleDateSelect}/>,
      extra: genExtra(),
    },
    {
      key: "2",
      label: "Time",
      children: <TimeComponent onclick={handleTimePick}/>,
      extra: <Text style={{ fontSize: token.fontSizeLG }}>
      {getFormattedTime(selected?.time, FORMATS.time)}
    
    </Text>
      
    },
    {
      key: "3",
      label: "Duration",
      children: <p>{text}</p>,
      extra: <DurationComponent/>,
    },
  ];
  return <Collapse activeKey={activeKey} items={items} expandIconPosition="end" />;
}
