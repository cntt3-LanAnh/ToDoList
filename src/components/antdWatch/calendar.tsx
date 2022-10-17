import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import React from 'react';

export const App: React.FC = () => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    // eslint-disable-next-line no-console
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="w-80 border border-solid">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
