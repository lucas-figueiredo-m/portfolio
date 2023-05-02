export type DateType = string;

export type DateFormat = {
  yearOnly: (date: DateType) => string;
  extendedMonthAndYear: (date: DateType) => string;
};
