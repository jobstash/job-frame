const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const shortTimestamp = (ts: number) => {
  const d = new Date(ts * 1000);
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const date = d.getDate();

  return `${date} ${month}, ${year}`;
};
