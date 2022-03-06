/// convert date to string YYYY-MM-DD HH:mm:ss
function convertDate(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

export default convertDate;
