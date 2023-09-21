function setDay(day) {
  const dayWeek = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]
  return dayWeek[day];
}
function formatHour(hour, min ,seg) {
  if (hour < 12) {
    return `${hour}:${min}:${seg} AM`
  }
  return `${hour - 12}:${min}:${seg} PM`;
}
function setMonth(month) {
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`,`September`, `October`, `November`, `December`];
  return months[month - 1];
  }

function formatDate(date) {
  const numberDay = date.getDate();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seg = date.getSeconds();
  setDay(day);
  return `${setDay(day)}, ${numberDay} ${setMonth(month)} ${year} ${formatHour(hour,min,seg)}`;
}

function updateDateTime() {
  const date = new Date();
  const dateBrazil = formatDate(date);
  const result = document.getElementById("date");
  result.textContent = `${dateBrazil}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);

