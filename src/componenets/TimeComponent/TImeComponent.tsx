import React, { useState } from 'react';
import { Dayjs } from 'dayjs';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
type TimeComponentProps={
  
  onclick:(time:Dayjs |null)=>void
}
export default function TimeComponent({onclick}:TimeComponentProps) {
 

  

  return( <TimePicker onChange={onclick} style={{ minWidth: "100%" }}/>)
};


// const [activeKey, setActiveKey] = useState<string | Array<string>>(
//   activePanels || ["1", "2"]
// )

// const handleDateChange = (date: Dayjs) => {
//   setDate(date)
//   setActiveKey(["2"])
// }

// const handleTimeChange = (time: Dayjs | null) => {
//   /* istanbul ignore next -- @preserve */
//   if (time) setTime(time)
//   /* istanbul ignore next -- @preserve */
//   setActiveKey([])
// }

{/* <TimePicker
onChange={handleTimeChange}
size="large"
use12Hours={formats.clock === "12h"}
format={formats.time}
style={{ minWidth: "100%" }}
disabledTime={() => getDisabledTime(closedHours)}
hideDisabledOptions
showNow={false}
/> */}