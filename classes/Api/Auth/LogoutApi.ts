import BaseApi from "~/classes/BaseApi";

export default class LogoutApi extends BaseApi {
  protected uri = 'auth/logout';

  public async logout(): Promise<any> {
    return await this.callToApi('post', this.uri);
  }
}
