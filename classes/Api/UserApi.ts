import BaseApi from "~/classes/BaseApi";
import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export default class UserApi extends BaseApi{
  private uri = 'users';

  public async me(): Promise<UserInterface> {
    return await this.callToApi(this.uri + '/me', 'get');
  }
}
