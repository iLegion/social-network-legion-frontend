import BaseApi from "~/classes/BaseApi";
import { PostResponseInterface } from "~/interfaces/classes/Api/PostApiInterface";

export default class PostApi extends BaseApi {
  protected uri = 'posts';

  public async getAll(): Promise<PostResponseInterface> {
    return await this.callToApi('get', this.uri);
  }
}
