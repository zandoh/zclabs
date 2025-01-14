const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatUTCDateTimeMonthYear = (utcDateTime: number | string | Date) => {
  const date = new Date(utcDateTime);

  const formattedDate = `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

  return formattedDate;
};

export const formatUTCDateTimeMonthDay = (utcDateTime: number | string | Date) => {
  const date = new Date(utcDateTime);

  const formattedDate = `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}`;

  return formattedDate;
};
