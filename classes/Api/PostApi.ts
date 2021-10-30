import BaseApi from "~/classes/BaseApi";
import { PostResponseInterface } from "~/interfaces/classes/Api/PostApiInterface";

export default class PostApi extends BaseApi {
  private uri = 'posts';

  public async getAll(): Promise<PostResponseInterface> {
    return await this.callToApi(this.uri, 'get');
  }
}
