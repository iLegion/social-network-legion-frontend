import {AxiosResponse} from "axios";

export default class ValidationError extends Error {
  private _errors: { email?: string[], password?: string[] } = {};

  constructor(response: AxiosResponse) {
    super(response.statusText);

    this.errors = response.data.errors;
  }

  public get errors() {
    return this._errors;
  }

  public set errors(value) {
    this._errors = value;
  }
}
