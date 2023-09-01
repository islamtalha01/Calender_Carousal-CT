import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { TimePicker } from "antd";

type TimeComponentProps = {
  onclick: (time: Dayjs | null) => void;
  compute?:()=>{disabledHours?: () => number[];}
  
};
export default function TimeComponent({ onclick,compute }: TimeComponentProps) {
  // const closedHrs:closedHours={start:5,end:6}
  return <TimePicker onChange={onclick} style={{ minWidth: "100%" }} disabledTime={compute} />;
}



  // use12Hours={formats.clock === "12h"}
  

