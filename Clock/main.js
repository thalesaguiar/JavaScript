function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day}/${month}`;
}

const date = new Date();
const dateBrazil = formatDate(date);

const result = document.getElementById("date");

result.textContent = `${dateBrazil}`;