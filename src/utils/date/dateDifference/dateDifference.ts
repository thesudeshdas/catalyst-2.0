import { ICustomDate } from '../../../types/global/global.types';

export function getDateDifference(
  startDate: ICustomDate,
  endDate: ICustomDate
): string {
  const startYear = parseInt(startDate.year);
  const startMonth = getMonthIndex(startDate.month);

  let endYear: number;
  let endMonth: number;
  if (endDate.year === 'Present' && endDate.month === 'Present') {
    const currentDate = new Date();
    endYear = currentDate.getFullYear();
    endMonth = currentDate.getMonth();
  } else {
    endYear = parseInt(endDate.year);
    endMonth = getMonthIndex(endDate.month);
  }

  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  const yearStr = yearDiff === 1 ? '1 year' : `${yearDiff} years`;
  const monthStr = monthDiff === 1 ? '1 month' : `${monthDiff} months`;

  if (yearDiff === 0) {
    return monthStr;
  } else if (monthDiff === 0) {
    return yearStr;
  } else {
    return `${yearStr}, ${monthStr}`;
  }
}

function getMonthIndex(month: string): number {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return months.indexOf(month);
}
