import { DateFormat, DateType } from "./format.type";
import { format } from "date-fns";

const yearOnly = (date: DateType) => format(new Date(date), "yyyy");
const extendedMonthAndYear = (date: DateType) =>
  format(new Date(date), "MMM/yyyy");

export const dateFormat: DateFormat = {
  yearOnly,
  extendedMonthAndYear,
};
