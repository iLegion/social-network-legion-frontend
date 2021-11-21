import BaseApi from "~/classes/BaseApi";
import { ViewResponseInterface, ViewStorePayloadInterface } from "~/interfaces/classes/Api/ViewApiInterface";

export default class LikeApi extends BaseApi {
  protected uri = 'views';

  public async store(payload: ViewStorePayloadInterface): Promise<ViewResponseInterface> {
    return await this.callToApi('post', this.uri, {}, payload);
  }

  public async delete(): Promise<ViewResponseInterface> {
    return await this.callToApi('delete', this.uri);
  }
}
