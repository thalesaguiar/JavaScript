function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Wating Date instance.');
  }
  
  if (!date) {
    date = new Date();
  }
  
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

} try {
  const date = new Date('01-01-1970 12: 58: 12');
  const hour = returnHour();
  console.log(hour);
}
catch (e) {
 // error 
}
finally {
  console.log('Have a good day');
}
