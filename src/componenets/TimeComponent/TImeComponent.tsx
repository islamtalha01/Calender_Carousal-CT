import { Dayjs } from "dayjs";
import { TimePicker } from "antd";

type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
  computeDisabledHours?: () => { disabledHours?: () => number[] };
};
export default function TimeComponent({
  onclick,
  computeDisabledHours,
}: TimeComponentProps) {
  return (
    <TimePicker
      onChange={onclick}
      style={{ minWidth: "100%" }}
      disabledTime={computeDisabledHours}
    />
  );
}
