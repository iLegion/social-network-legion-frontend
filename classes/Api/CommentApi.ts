import BaseApi from "~/classes/BaseApi";
import {
  CommentGetPayloadInterface,
  CommentResponseInterface,
  CommentStorePayloadInterface,
  CommentsResponseInterface
} from "~/interfaces/classes/Api/CommentApiInterface";

export default class CommentApi extends BaseApi {
  protected uri = 'comments';

  public async getById(payload: CommentGetPayloadInterface): Promise<CommentsResponseInterface> {
    return await this.callToApi('get', `${this.uri}`, payload);
  }

  public async store(payload: CommentStorePayloadInterface): Promise<CommentResponseInterface> {
    return await this.callToApi('post', `${this.uri}`, {}, payload);
  }
}
