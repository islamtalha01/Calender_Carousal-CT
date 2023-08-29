import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";
import { DateType } from "../common/types/calendar.types";
import {Dayjs} from "dayjs";
type CalenderCarouselProps = {
  dates: Array<DateType>;
  setTime:(time:Dayjs)=>void,
  
};
const text = `hi`;

const genExtra = () => <CurrentDay />;

export default function CalenderContainer({dates,setTime}:CalenderCarouselProps) {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Date",
      children: <CalendarCarousal dates={dates}/>,
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
  return <Collapse  items={items} expandIconPosition="end" />;
}
