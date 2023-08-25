import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

import AddEventCarousal from "../componenets/CalendarCarousal/CalendarCarousal";
import DurationComponent from "../componenets/DurationComponent/DurationComponent";
import CurrentTime from "../componenets/CurrentTime/CurrentTime";
const text = `hi`;

const genExtra = () => <CurrentDay />;
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Date",
    children: <AddEventCarousal/>,
    extra: genExtra(),
  },
  {
    key: "2",
    label: "Time",
    children: <p>{text}</p>,
    extra:<CurrentTime/>
    
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
