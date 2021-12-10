import BaseApi from "~/classes/BaseApi";
import { LoginResponseInterface, LoginStorePayloadInterface } from "~/interfaces/classes/Api/Auth/LoginApiInterface";

export default class LoginApi extends BaseApi {
  protected uri = 'auth/login';

  public async login(payload: LoginStorePayloadInterface): Promise<LoginResponseInterface> {
    return await this.callToApi('post', this.uri, {}, payload);
  }
}
