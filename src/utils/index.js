export function truncate(text, limit) {
  const shortened = text.indexOf(" ", limit);
  if (shortened === -1) {
    return text;
  } else {
    return text.substring(0, shortened) + "...";
  }
}
