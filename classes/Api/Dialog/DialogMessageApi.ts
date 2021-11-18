import BaseApi from "~/classes/BaseApi";
import { DialogMessageResponseInterface } from "~/interfaces/classes/Api/Dialog/DialogMessageApiInterface";

export default class DialogMessageApi extends BaseApi {
  protected uri = 'dialogs';

  public async getDialogMessage(id: number): Promise<DialogMessageResponseInterface> {
    return await this.callToApi('get', `${this.uri}/${id}/messages`);
  }
}
