import { DatePipe } from '@angular/common';
export function formatFechaDMY(date: Date | null | undefined): string {
  let datepipe = new DatePipe('en-US');
  if (date != null && date != undefined) {
    return datepipe.transform(date, 'dd-MM-YYYY') || '';
  } else return '';
}
