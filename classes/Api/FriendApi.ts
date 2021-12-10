import BaseApi from "~/classes/BaseApi";

export default class FriendApi extends BaseApi {
  protected uri = 'friends';

  public async store(id: number): Promise<Object> {
    return await this.callToApi('post', `${this.uri}/${id}`);
  }
}
