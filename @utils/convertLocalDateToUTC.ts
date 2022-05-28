const convertLocalDateToUTC = (vdate: string, time: string) => {
  if (vdate && time) {
    const dateb = `${vdate}T${time}`;
    const isoDate = new Date(dateb)
      ?.toISOString()
      ?.replace('T', ' ')
      ?.replace('Z', '')
      ?.slice(0, -4);
    return isoDate;
  }
  return '';
};
export default convertLocalDateToUTC;
