import { Calendar } from '@a-ui/react';

import { useState } from 'react';

export function DatepickerExamples() {
  const [date, setDate] = useState(new Date('2023-02-22').toISOString());

  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Calendar</h2>
      <div className="u-margin">
        <p className="u-margin-top">Uncontrolled</p>
        <Calendar />
        <p className="u-margin-top">Controlled</p>
        <Calendar
          value={date}
          onChange={setDate}
          unavailable={[new Date('2023-02-24').toISOString(), new Date('2023-02-25').toISOString()]}
        />
      </div>
    </div>
  );
}

export default DatepickerExamples;
