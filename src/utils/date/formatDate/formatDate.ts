import { ICustomDate } from '../../../types/global/global.types';

export function formatDate(date: ICustomDate): string {
  return `${date.month.slice(0, 3)} ${date.year}`;
}
