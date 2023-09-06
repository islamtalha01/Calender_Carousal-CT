import { Dayjs } from "dayjs";
import { TimePicker } from "antd";

type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
  compute?: () => { disabledHours?: () => number[] };
};
export default function TimeComponent({
  onclick,
  compute,
}: TimeComponentProps) {
  return (
    <TimePicker
      onChange={onclick}
      style={{ minWidth: "100%" }}
      disabledTime={compute}
    />
  );
}
