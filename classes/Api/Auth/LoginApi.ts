import BaseApi from "~/classes/BaseApi";
import { LoginResponseInterface } from "~/interfaces/classes/Api/Auth/LoginApiInterface";

export default class LoginApi extends BaseApi {
  protected uri = 'auth/login';

  public async login(params: { email: string, password: string }): Promise<LoginResponseInterface> {
    return await this.callToApi('post', this.uri, params);
  }
}
