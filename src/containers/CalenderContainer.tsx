import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { DateType } from "../common/types/calendar.types";
import { useState } from "react";
import useCalendar from "../hooks";
import {Dayjs} from "dayjs";
type CalenderCarouselProps = {
  dates: Array<DateType>;
  setTime:(time:Dayjs)=>void,
  
};

const text = `hi`;

const genExtra = () => <CurrentDay />;

export default function CalenderContainer({dates,setTime}:CalenderCarouselProps) {
  const {setDate}=useCalendar()
  const [activeKey, setActiveKey] = useState<string | Array<string>>(
     ["1", "2"]
  )
  const handleClick=(date:Dayjs)=>
{
  setDate(date);
  setActiveKey(["2"])
  
}
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      children: <CalendarCarousal dates={dates} onClick={handleClick} />,
      extra: genExtra(),
    },
    {
      key: "2",
      label: "Time",
      children: <TimeComponent onclick={setTime}/>,
      extra:null
      
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
