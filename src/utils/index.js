export function truncate(text, limit) {
  const shortened = text.indexOf(" ", limit);
  if (shortened === -1) {
    return text;
  } else {
    return text.substring(0, shortened) + "...";
  }
}

export function formatRunTime(minutes) {
  let hour = Math.floor(minutes / 60);
  let minute = minutes % 60;
  minute = minute < 10 ? "0" + minute : minute;
  return `${hour} HR ${minute} MIN`;
}
