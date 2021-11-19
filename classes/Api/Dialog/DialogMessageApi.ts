import BaseApi from "~/classes/BaseApi";
import {
  DialogMessageResponseInterface,
  DialogMessagesResponseInterface, DialogMessageStorePayloadInterface
} from "~/interfaces/classes/Api/Dialog/DialogMessageApiInterface";

export default class DialogMessageApi extends BaseApi {
  protected uri = 'dialogs';

  public async getDialogMessage(id: number): Promise<DialogMessagesResponseInterface> {
    return await this.callToApi('get', `${this.uri}/${id}/messages`);
  }

  public async store(id: number, payload: DialogMessageStorePayloadInterface): Promise<DialogMessageResponseInterface> {
    return await this.callToApi('post', `${this.uri}/${id}/messages`, {}, payload);
  }
}
