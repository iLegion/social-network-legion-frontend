import BaseApi from "~/classes/BaseApi";
import { LoginResponseInterface } from "~/interfaces/classes/Api/Auth/LoginApiInterface";

export default class LoginApi extends BaseApi {
  private uri = 'auth';

  public async login(params: { email: string, password: string }): Promise<LoginResponseInterface> {
    return await this.callToApi(this.uri + '/login', 'post', params);
  }
}
