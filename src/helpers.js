export const convTime = (timeValue) => {
  // Calculate milliseconds in a year
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  const realTime = Date.now();
  var inTime = new Date(`${timeValue}`);
  var time = realTime - inTime.getTime();
  var str = "";

  if (time > year) {
    time = time / year;
    str = "year(s)";
  } else if (time > month) {
    time = time / month;
    str = "month(s)";
  } else if (time > day) {
    time = time / day;
    str = "day(s)";
  } else if (time > hour) {
    time = time / hour;
    str = "hour(s)";
  } else {
    time = time / minute;
    str = "minute(s)";
  }
  time = Math.round(time);
  str += " ago."
  return { time, str };
};
