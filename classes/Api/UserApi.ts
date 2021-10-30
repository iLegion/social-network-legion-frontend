import BaseApi from "~/classes/BaseApi";
import { UserResponseInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default class UserApi extends BaseApi{
  private uri = 'users';

  public async me(): Promise<UserResponseInterface> {
    return await this.callToApi(this.uri + '/me', 'get');
  }
}
