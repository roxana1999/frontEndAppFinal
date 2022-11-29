import { DatePipe } from '@angular/common';
export function formatFecha(date: Date | null | undefined): string {
  let datepipe = new DatePipe('en-US');
  if (date != null && date != undefined) {
    return datepipe.transform(date, 'YYYY-MM-dd') || '';
  } else return '';
}
