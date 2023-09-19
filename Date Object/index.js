function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = addZero(date.getFullYear());
  const hour = addZero(date.getHours());
  const min = addZero(date.getMinutes());
  const seg = addZero(date.getSeconds());
  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}

const date = new Date();
const dateBrasil = formatDate(date);
console.log(dateBrasil);