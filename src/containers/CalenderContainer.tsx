import CurrentDay from "../componenets/CurrentDay/CurrentDay";
import type { CollapseProps } from "antd";
import { Collapse, Button } from "antd";
import AddEventCarousal from "../componenets/AddEventCarousal/AddEventCarousal";
const text = `hi`;

const genExtra = () => <CurrentDay />;
const Duration = () => (
  <>
    <Button type="primary" shape="circle">
      +
    </Button>
    <p>2:00</p>
    <Button type="primary" shape="circle">
      -
    </Button>
  </>
);
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <AddEventCarousal/>,
    extra: genExtra(),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    extra: Duration(),
  },
];
export default function CalenderContainer() {
  return <Collapse  items={items} expandIconPosition="end" />;
}
