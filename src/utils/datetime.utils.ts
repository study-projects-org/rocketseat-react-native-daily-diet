
export function getCurrentTime(): string {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function getCurrentDate(): string {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export function parseTime(timeStr: string): Date {
  const [hour, minute] = timeStr.split(':').map(Number);
  return new Date(0, 0, 0, hour, minute);
}

export function parseDateTime(dateStr: string, timeStr: string): Date {
  const date = parseDate(dateStr);
  const time = parseTime(timeStr);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
}