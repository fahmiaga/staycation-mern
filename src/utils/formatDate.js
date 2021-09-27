export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: no }, , { value: da }] = dtf.formatToParts(d);
  return `${da} ${no}`;
};
