import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CalendarCarousal from "../componenets/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import TimeComponent from "../componenets/TimeComponent/TImeComponent";

const text = `hi`;

const genExtra = () => <CurrentDay />;
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Date",
    children: <CalendarCarousal/>,
    extra: genExtra(),
  },
  {
    key: "2",
    label: "Time",
    children: <TimeComponent/>,
    extra:null
    
  },
  {
    key: "3",
    label: "Duration",
    children: <p>{text}</p>,
    extra: <DurationComponent/>,
  },
];
export default function CalenderContainer() {
  return <Collapse  items={items} expandIconPosition="end" />;
}
