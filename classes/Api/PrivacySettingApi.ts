import BaseApi from "~/classes/BaseApi";
import { PrivacySettingUpdatePayloadInterface } from "~/interfaces/classes/Api/PrivacySettingApiInterface";
import { UserResponseInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default class UserApi extends BaseApi{
  protected uri = 'privacy-settings';

  public async update(id: number, payload: PrivacySettingUpdatePayloadInterface): Promise<UserResponseInterface> {
    return await this.callToApi('put', `${this.uri}/${id}`, {}, payload);
  }
}
