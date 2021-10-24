import BaseApi from "~/classes/BaseApi";

export default class LoginApi extends BaseApi {
  private uri = 'auth';

  public async login(params: { email: string, password: string }): Promise<{ type: string, token: string }> {
    return await this.callToApi(this.uri + '/login', 'post', params);
  }
}
