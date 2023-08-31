import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { TimePicker } from "antd";
import dayjs from "dayjs";
type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
};
export default function TimeComponent({ onclick }: TimeComponentProps) {
  return <TimePicker onChange={onclick} style={{ minWidth: "100%" }} />;
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
