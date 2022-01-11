import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount',
})

export class DayCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let timelessDay: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let dayDifference = Math.ceil(
      Math.abs(timelessDay - value) / (1000 * 86400)
    );

    if (dayDifference >= 1 && timelessDay > value) {
      return dayDifference;
    } else {
      return 0;
    }
  }
}