import React, { useState, useEffect } from 'react';
import moment from 'moment'
import pluralize from 'pluralize'

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const monthsSeconds = 2592000;
const yearSeconds = 3.154e+7;

const Countdown = (props) => {
  const { date } = props;
  const [dateStamp, setDateStamp] = useState({
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    months: 0,
    seconds: 0,
  })

  const endDate = moment(date)
  const timeUntilDate = moment.duration(endDate.diff(moment()))
  const initialRemainingTime = timeUntilDate > 0 ? timeUntilDate : timeUntilDate.add(1, 'year');

  useEffect(() => {
    // update every second
    const timeUntilDate = moment.duration(endDate.diff(moment()));
    const remainingTime = timeUntilDate > 0 ? timeUntilDate : timeUntilDate.add(1, 'year');
    const intervalId = setInterval(() => {
      remainingTime
        ? setDateStamp({
          milliseconds: remainingTime.milliseconds(),
          seconds: remainingTime.seconds(),
          minutes: remainingTime.minutes(),
          hours: remainingTime.hours(),
          days: remainingTime.days(),
          months: remainingTime.months(),
        })
        : clearInterval(intervalId);
    }, 1000);
    return () => {
      clearInterval(intervalId)
    }
  }, [endDate]);

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{pluralize(dimension, time)}</div>
      </div>
    );
  };

  return (
    <div className="countdown">
      <div className='circle-timer'>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#7E2E84"]]}
          duration={yearSeconds}
          initialRemainingTime={initialRemainingTime}
          onComplete={() =>[true]}
          >
        {renderTime("Month", dateStamp.months)}
      </CountdownCircleTimer>
      </div>
      <div className='circle-timer'>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#D14081"]]}
          duration={monthsSeconds}
          initialRemainingTime={initialRemainingTime}
          onComplete={() =>[true]}
        >
          {renderTime("Day", dateStamp.days)}
        </CountdownCircleTimer>
      </div>
      <div className='circle-timer'>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#EF798A"]]}
          duration={daySeconds}
          initialRemainingTime={initialRemainingTime}
          onComplete={() =>[true]}
        >
          {renderTime("Hour", dateStamp.hours)}
        </CountdownCircleTimer>
      </div>
      <div className='circle-timer'>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#218380"]]}
          duration={hourSeconds}
          initialRemainingTime={initialRemainingTime}
          onComplete={() =>[true]}
        >
          {renderTime("Minute", dateStamp.minutes)}
        </CountdownCircleTimer>
      </div>
      <div className='circle-timer'>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#218380"]]}
          duration={minuteSeconds}
          initialRemainingTime={initialRemainingTime}
          onComplete={() =>[true]}
        >
          {renderTime("Second", dateStamp.seconds)}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Countdown;
