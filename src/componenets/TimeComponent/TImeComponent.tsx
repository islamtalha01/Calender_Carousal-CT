import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { closedHours } from "../../common/types/calendar.types";
import { getDisabledTime } from "../../utils/Time.utils";
type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
  
};
export default function TimeComponent({ onclick }: TimeComponentProps) {
  const closedHrs:closedHours={start:5,end:6}
  return <TimePicker onChange={onclick} style={{ minWidth: "100%" }} disabledTime={()=>getDisabledTime(closedHrs) } />;
}

{
  /* <TimePicker
onChange={handleTimeChange}
size="large"
use12Hours={formats.clock === "12h"}
format={formats.time}
style={{ minWidth: "100%" }}
disabledTime={() => getDisabledTime(closedHours)}
hideDisabledOptions
showNow={false}
/> */
}
