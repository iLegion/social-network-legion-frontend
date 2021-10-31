import BaseApi from "~/classes/BaseApi";
import { UserResponseInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default class UserApi extends BaseApi{
  protected uri = 'users';

  public async me(): Promise<UserResponseInterface> {
    return await this.callToApi('get', this.uri + '/me');
  }
}
