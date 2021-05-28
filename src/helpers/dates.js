function removeTimeFromIsoDate(date) {
  let dateWithoutTime = date.substr(0, 10);
  return dateWithoutTime;
}

export function getDateFormatDDMMYYYY(date) {
  let newDate = removeTimeFromIsoDate(date);
  let year = newDate.substring(0, 4);
  let month = newDate.substring(5, 7);
  let days = newDate.substring(8, 10);

  return days + "-" + month + "-" + year;
}
