export default class DateService {
  public destructDate(value: Date): { day: number, month: number, year: number, hours: number, minutes: number, seconds: number } {
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const hours = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();

    return { day, month, year, hours, minutes, seconds };
  }

  public isSame(firstDate: Date, secondDate: Date): boolean {
    return this.getFormattedDate(firstDate) === this.getFormattedDate(secondDate);
  }
  public isToday(value: Date): boolean {
    const { day, month, year } = this.destructDate(value);
    const { day: tDay, month: tMonth, year: tYear } = this.destructDate(new Date());

    return day === tDay && month === tMonth && year === tYear;
  }

  public getFormattedDate(value: Date, format = 'd-m-Y'): string {
    const { day, month, hours, minutes, seconds } = this.destructDate(value);

    if (format === 'h:m:s d-m-Y') {
      return (hours < 10 ? '0' + hours : hours)
        + ':' + (minutes < 10 ? '0' + minutes : minutes)
        + ':' + (seconds < 10 ? '0' + seconds : seconds)
        + ' '
        + (day < 10 ? '0' + day : day)
        + '-' + (month < 10 ? '0' + month : month)
        + '-' + value.getFullYear();
    } else if (format === 'h:m:s') {
      return (hours < 10 ? '0' + hours : hours)
        + ':' + (minutes < 10 ? '0' + minutes : minutes)
        + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }

    return (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + value.getFullYear();
  }

  public getTodayTimeOrDate(value: Date): string {
    return this.isToday(value) ? this.getFormattedDate(value, 'h:m:s') : this.getFormattedDate(value);
  }
}
