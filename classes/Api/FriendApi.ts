import BaseApi from "~/classes/BaseApi";
import {
  UsersGetPayloadInterface,
  UsersResponseInterface
} from "~/interfaces/classes/Api/UserApiInterface";

export default class FriendApi extends BaseApi {
  protected uri = 'friends';

  public async store(id: number): Promise<Object> {
    return await this.callToApi('post', `${this.uri}/${id}`);
  }

  public async get(id: number, params: UsersGetPayloadInterface = {}): Promise<UsersResponseInterface> {
    return await this.callToApi('get', `${this.uri}/${id}`, params);
  }
}
