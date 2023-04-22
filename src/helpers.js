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
    str = "years";
  } else if (time > month) {
    time = time / month;
    str = "months";
  } else if (time > day) {
    time = time / day;
    str = "days";
  } else if (time > hour) {
    time = time / hour;
    str = "hours";
  } else {
    time = time / minute;
    str = "minutes";
  }
  time = Math.round(time);
  return { time, str };
};
