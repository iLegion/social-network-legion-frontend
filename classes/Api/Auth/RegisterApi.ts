import BaseApi from "~/classes/BaseApi";
import {
  RegisterResponseInterface,
  RegisterStorePayloadInterface
} from "~/interfaces/classes/Api/Auth/RegisterApiInterface";

export default class LogoutApi extends BaseApi {
  protected uri = 'auth/register';

  public async register(payload: RegisterStorePayloadInterface): Promise<RegisterResponseInterface> {
    return await this.callToApi('post', this.uri, {}, payload);
  }
}
