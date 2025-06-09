import { format, formatDistanceToNow, isValid, type DateArg } from "date-fns";

export function formatDate(date: DateArg<Date>) {
  return format(date, "dd MMM yyyy h:mm a");
}

export function timeAgo(date: DateArg<Date> | string) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  if (!isValid(dateObj)) return "Invalid date";

  return formatDistanceToNow(dateObj) + " ago";
}
