import BaseApi from "~/classes/BaseApi";
import {
  UserResponseInterface,
  UsersGetPayloadInterface,
  UsersResponseInterface,
  UserUpdatePayloadInterface,
} from "~/interfaces/classes/Api/UserApiInterface";

export default class UserApi extends BaseApi {
  protected uri = 'users';

  public async getAll(params: { page?: number } = {}, payload: UsersGetPayloadInterface): Promise<UsersResponseInterface> {
    return await this.callToApi('get', this.uri, params, payload);
  }

  public async me(): Promise<UserResponseInterface> {
    return await this.callToApi('get', this.uri + '/me');
  }

  public async byId(id: number): Promise<UserResponseInterface> {
    return await this.callToApi('get', `${this.uri}/${id}`);
  }

  public async update(id: number, payload: UserUpdatePayloadInterface): Promise<UserResponseInterface> {
    return await this.callToApi('put', `${this.uri}/${id}`, {}, payload);
  }

  public async avatar(id: number, payload: FormData): Promise<UserResponseInterface> {
    return await this.callToApi('post', `${this.uri}/${id}/avatar`, {}, payload);
  }
}
