import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { TimePicker } from 'antd';

const TimeComponent: React.FC = () => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const onChange = (time: Dayjs|null) => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

export default TimeComponent