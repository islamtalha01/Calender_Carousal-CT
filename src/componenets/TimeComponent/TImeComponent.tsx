import { Dayjs } from "dayjs";
import { TimePicker,Row } from "antd";
import { theme } from "antd";
type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
  computeDisabledHours?: () => { disabledHours?: () => number[] };
};
export default function TimeComponent({
  onclick,
  computeDisabledHours,
}: TimeComponentProps) {
  const { useToken } = theme;
  const{token}=useToken()
  return (
    <Row style={{margin:token.marginMD}}>
      <TimePicker
      onChange={onclick}
      style={{ minWidth: "100%"}}
      disabledTime={computeDisabledHours}
      showNow={false}
    />
    </Row>
    
  );
}
