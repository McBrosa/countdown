import React, { useState } from 'react';
import moment from 'moment'

import { Card } from '@material-ui/core'

import '../style/countdown.css';
import Countdown from '../components/Countdown';
import DatePicker from '../components/DatePicker';

const DateCountdown = () => {
  const [date, setDate] = useState(moment())

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  return (
      <Card className="content">
        <DatePicker
          onChange={onChangeDate}
        />
        <Countdown date={date} />
      </Card>
  );
}

export default DateCountdown;
