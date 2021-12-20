export default class DateService {
  public isSame(firstDate: Date, secondDate: Date): boolean {
    return this.getFormattedDate(firstDate) === this.getFormattedDate(secondDate);
  }

  public getFormattedDate(value: Date, format = 'd-m-Y'): string {
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const hours = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();

    if (format === 'h:m:s d-m-Y') {
      return (hours < 10 ? '0' + hours : hours)
        + ':' + (minutes < 10 ? '0' + minutes : minutes)
        + ':' + (seconds < 10 ? '0' + seconds : seconds)
        + ' '
        + (day < 10 ? '0' + day : day)
        + '-' + (month < 10 ? '0' + month : month)
        + '-' + value.getFullYear();
    }

    return (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + value.getFullYear();
  }
}
