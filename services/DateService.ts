export default class DateService {
  public getFormattedDate(value: Date, format = 'd-m-Y'): string {
    const day = value.getDate();
    const month = value.getMonth() + 1;

    if (format === 'h:m:s d-m-Y') {
      return value.getHours()
        + ':' + value.getMinutes()
        + ':' + value.getSeconds()
        + ' '
        + (day < 10 ? '0' + day : day)
        + '-' + (month < 10 ? '0' + month : month)
        + '-' + value.getFullYear();
    }

    return (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + value.getFullYear();
  }
}
