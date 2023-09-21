function setDay(day) {
  switch (day) {
    case 0:
      return `Sunday`;
    case 1:
      return `Monday`;
    case 2:
      return `Tuesday`;
    case 3:
      return `Wednesday`;
    case 4:
      return `Thursday`;
    case 5:
      return `Friday`;
    case 6:
      return `Saturday`;
  }
}
function setMonth(month) {
  switch (month) {
    case 1:
      return `January`;
    case 2:
      return `February`;
    case 3:
      return `March`;
    case 4:
      return `April`;
    case 5:
      return `May`;
    case 6:
      return `June`;
    case 7:
      return `July`;
    case 8:
      return `August`;
    case 9:
      return `September`;
  }
}
function formatDate(date) {
  const numberDay = date.getDate();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const seg = date.getSeconds();
  setDay(day);
  return `${setDay(day)}, ${numberDay} ${setMonth(month)} ${year} `;
}

const date = new Date();
const dateBrazil = formatDate(date);

const result = document.getElementById("date");

result.textContent = `${dateBrazil}`;