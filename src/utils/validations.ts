
export function isValidString(value: string) {
  if (!value || value.trim() === '' || value.length < 3) {
    return false;
  }

  return true;
}

export function isValidDate(value: string) {
  if (!value || value.trim() === '' || value.length < 10) {
    return false;
  }

  const day = value.substring(0, 2);
  const month = value.substring(3, 5);
  const year = value.substring(6, 10);

  const date = new Date(`${year}-${month}-${day}`);

  if (isNaN(date.getTime())) {
    return false;
  }

  const nowInTime = new Date().getTime();

  if (date.getTime() > nowInTime) {
    return false;
  }

  return true;
}

export function isValidHour(value: string) {
  if (!value || value.trim() === '' || value.length < 5) {
    return false;
  }

  const hour = value.substring(0, 2);
  const minute = value.substring(3, 5);

  if (parseInt(hour) > 23) {
    return false;
  }

  if (parseInt(minute) > 59) {
    return false;
  }

  return true;
}