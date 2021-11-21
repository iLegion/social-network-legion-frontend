import BaseApi from "~/classes/BaseApi";
import { LikeResponseInterface, LikeStorePayloadInterface } from "~/interfaces/classes/Api/LikeApiInterface";

export default class LikeApi extends BaseApi {
  protected uri = 'likes';

  public async store(payload: LikeStorePayloadInterface): Promise<LikeResponseInterface> {
    return await this.callToApi('post', this.uri, {}, payload);
  }

  public async delete(): Promise<LikeResponseInterface> {
    return await this.callToApi('delete', this.uri);
  }
}
