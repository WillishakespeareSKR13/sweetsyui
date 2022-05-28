const convertUTC = (date: Date): string => {
  const newdate = new Date(date).toString().replace('T', ' ');
  const year = newdate?.slice(11, 15);
  const hour = newdate?.slice(16, 25);
  const day = newdate?.slice(8, 10);
  const month = date?.toString()?.slice(5, 7);
  return `${year}-${month}-${day} ${hour}`;
};
export default convertUTC;
