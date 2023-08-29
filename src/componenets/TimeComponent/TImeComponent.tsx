import React, { useState } from 'react';
import { Dayjs } from 'dayjs';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
type TimeComponentProps={
  
  onclick:(time:Dayjs)=>void
}
export default function TimeComponent(props:TimeComponentProps) {
 

  const onChange = () => {
  
  };

  return( <TimePicker value={null} onChange={onChange} />)
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