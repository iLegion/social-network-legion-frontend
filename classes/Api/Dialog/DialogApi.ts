import BaseApi from "~/classes/BaseApi";
import {
  DialogResponseInterface,
  DialogStorePayloadInterface
} from "~/interfaces/classes/Api/Dialog/DialogApiInterface";

export default class DialogApi extends BaseApi {
  protected uri = 'dialogs';

  public async getMyDialogs(): Promise<DialogResponseInterface> {
    return await this.callToApi('get', this.uri);
  }

  public async store(payload: DialogStorePayloadInterface): Promise<DialogResponseInterface> {
    return await this.callToApi('post', this.uri, {}, payload);
  }
}
