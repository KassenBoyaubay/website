import React, { useEffect, useState } from "react";
import gift from "./gift.jpeg";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CountdownTimer = () => {
  const [weekday, setWeekday] = useState(0);
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [values, setValues] = useState([]);
  const [finish, setFinish] = useState(false);
  const [futureTime, setFutureTime] = useState(0);

  useEffect(() => {
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();
    // months are ZERO index based;
    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
    // let futureDate = new Date(2020, 3, 24, 11, 30, 0);

    setWeekday(weekdays[futureDate.getDay()]);
    setDate(futureDate.getDate());
    setMonth(months[futureDate.getMonth()]);
    setYear(futureDate.getFullYear());
    setHours(futureDate.getHours());
    setMinutes(futureDate.getMinutes());
    setFutureTime(futureDate.getTime());
  }, []);

  useEffect(() => {
    let countdown = setTimeout(getRemaindingTime, 1000);
    return () => {
      if (finish) clearTimeout(countdown);
    };
  }, [futureTime, values]);

  function getRemaindingTime() {
    setFinish(false);
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    if (t < 0) {
      setFinish(true);
    }

    // set values array
    setValues([days, hours, minutes, seconds]);
  }

  function format(i) {
    if (values[i] < 10) {
      return `0${values[i]}`;
    } else return values[i];
  }

  return (
    <div className="mySass CountdownTimer">
      <section className="section-center">
        <article className="gift-img">
          <img src={gift} alt="gift" />
        </article>
        <article className="gift-info">
          <h3>old iphone giveaway</h3>
          <h4 className="giveaway">
            {`giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`}
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </p>
          <div className="deadline">
            {finish && (
              <h4 class="expired">sorry, this giveaway has expired!</h4>
            )}
            {!finish && (
              <div className="deadline-format">
                <div>
                  <h4 className="days">{format(0)}</h4>
                  <span>days</span>
                </div>
              </div>
            )}
            {!finish && (
              <div className="deadline-format">
                <div>
                  <h4 className="days">{format(1)}</h4>
                  <span>days</span>
                </div>
              </div>
            )}
            {!finish && (
              <div className="deadline-format">
                <div>
                  <h4 className="days">{format(2)}</h4>
                  <span>days</span>
                </div>
              </div>
            )}
            {!finish && (
              <div className="deadline-format">
                <div>
                  <h4 className="days">{format(3)}</h4>
                  <span>days</span>
                </div>
              </div>
            )}
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountdownTimer;
