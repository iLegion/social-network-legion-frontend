import BaseApi from "~/classes/BaseApi";
import { PostsResponseInterface } from "~/interfaces/classes/Api/PostApiInterface";

export default class PostApi extends BaseApi {
  protected uri = 'posts';

  public async getAll(): Promise<PostsResponseInterface> {
    return await this.callToApi('get', this.uri);
  }
}
