import React, { useState, useEffect } from 'react';
import moment from 'moment'
import pluralize from 'pluralize'

const Countdown = (props) => {
  const { date } = props;
  const [dateStamp, setDateStamp] = useState({
    days: 0,
    hours: 0,
    milliseconds: 0,
    minutes: 0,
    months: 0,
    seconds: 0,
    years: 0
  })

  useEffect(() => {
    // update every second
    const endDate = moment(date)
    const interval = setInterval(() => {
      const remainingTime = moment.duration(moment().diff(endDate));
      remainingTime
        ? setDateStamp({
          milliseconds: remainingTime.milliseconds(),
          seconds: remainingTime.seconds(),
          minutes: remainingTime.minutes(),
          hours: remainingTime.hours(),
          days: remainingTime.days(),
          months: remainingTime.months(),
          years: remainingTime.years()
        })
        : clearInterval(interval)();
    }, 1000);
    return () => {
      clearInterval(interval)()
    }
  }, [date]);

  return (
    <div className="countdown">
      <span className="countdown-col">
        <strong>{pluralize('Day', dateStamp.days)}</strong>
        <span>{dateStamp.days}</span>
      </span>

      <span className="countdown-col">
        <span>{pluralize('Hour', dateStamp.hours)}</span>
        <strong>{dateStamp.hours}</strong>
      </span>

      <span className="countdown-col">
        <span>{pluralize('Minute', dateStamp.minutes)}</span>
        <strong>{dateStamp.minutes}</strong>
      </span>

      <span className="countdown-col">
        <span>{pluralize('Second', dateStamp.seconds)}</span>
        <strong>{dateStamp.seconds}</strong>
      </span>
    </div>
  );
}

export default Countdown;
