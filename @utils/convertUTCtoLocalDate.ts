import convertUTC from './convertUTC';

const convertUTCtoLocalDate = (date: Date) => {
  const convertDate = convertUTC(date);
  const toStringDate = convertDate.toString()?.slice(0, 19).replace('T', ' ');
  const newDate = toStringDate?.slice(0, 10) ?? '';
  const newTime = toStringDate?.slice(10, 16).replace(/ /g, '') ?? '';
  return {
    date: newDate,
    time: newTime,
  };
};
export default convertUTCtoLocalDate;
